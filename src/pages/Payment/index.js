import React, { useState, useMemo, useRef } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import { formatPrice } from '../../util/format';
import Background from '../../components/Background';
import card from '../../../assets/cards.png';

import { setFormPayment } from '../../store/module/sale/actions';

import {
  Container,
  Content,
  Header,
  LabelTotal,
  Total,
  Label,
  BorderSelected,
  Selected,
  BoxOption,
  Option,
  Brand,
  OptionLabel,
  Block,
  ChangeLabel,
  BoxChangeOption,
  ChangeTrue,
  ChangeFalse,
  ResponseLabel,
  ChangeInput,
  ImageCard,
  ButtonPayment,
  TextButton,
} from './styles';

const Payment = ({ navigation }) => {
  const { dataSale } = useSelector((state) => state.sale);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const inputChange = useRef();

  const [money, setMoney] = useState(true);
  const [credit, setCredit] = useState(false);
  const [changeTrue, setChangeTrue] = useState(false);
  const [changeFalse, setChanegFalse] = useState(true);
  const [change, setChange] = useState(dataSale ? String(dataSale.change_for) : '');
  const [payment, setPayment] = useState(dataSale ? dataSale.payment : 'A VISTA');

  function handleOptionsPayment(option){
    if (option === 0) {
      setMoney(true);
      setCredit(false);
      setPayment('A VISTA');
    } else {
      setMoney(false);
      setCredit(true);
      setChanegFalse(true);
      setChangeTrue(false);
      setPayment('CARTÃO');
      setChange('');
    }
  }

  function handleOptionsChange(option){
    if (option === 0) {
      setChangeTrue(true);
      setChanegFalse(false);
      if (dataSale.change_for === null || dataSale.change_for === 0) {
        setChange('');
        return;
      }
      setChange(String(dataSale.change_for));
    } else {
      setChangeTrue(false);
      setChanegFalse(true);
      setChange('');
    }
  }

  useMemo(() => {
    if (isFocused) {
      if(dataSale) {
        if (dataSale.payment === 'A VISTA') {
          handleOptionsPayment(0);
          if (dataSale.change_for === null || dataSale.change_for === 0) {
            handleOptionsChange(1);
          } else {
            handleOptionsChange(0);
          }
        } else {
          handleOptionsPayment(1);
        }
      }
    }
  }, [isFocused]);

  function defineFormPayment() {
    if (changeTrue && change === '') {
      Alert.alert('### Ops!!! ###', 'Informe para quanto é o seu troco');
      inputChange.current.focus();
    } else {
      const data = {
        payment,
        change_for: Number(change),
      }
      dispatch(setFormPayment(data));
      navigation.push('Confirmation');
    }
  }

  return (
    <Background>
      <Container>
        <Content>
          <Header>
            <LabelTotal>Valor à pagar:</LabelTotal>
            <Total>{formatPrice(dataSale.total)}</Total>
          </Header>

          <Label>Pagar com:</Label>

          <BorderSelected visibled={money}>
            <Selected
              onPress={() => handleOptionsPayment(0)}
              enabled={money ? false : true}
            >
              <BoxOption>
                <Option>
                  <Brand visibled={money} />
                </Option>
                <OptionLabel>DINHEIRO</OptionLabel>
              </BoxOption>

              {money && (
                <>
                  <Block>
                    {money && (
                      <>
                        <ChangeLabel>Troco ?</ChangeLabel>
                        <BoxChangeOption>
                          <ChangeTrue onPress={() => handleOptionsChange(0)}>
                            <Option>
                              <Brand visibled={changeTrue} />
                            </Option>
                            <ResponseLabel>SIM</ResponseLabel>
                          </ChangeTrue>
                          <ChangeFalse onPress={() => handleOptionsChange(1)}>
                            <Option>
                              <Brand visibled={changeFalse} />
                            </Option>
                            <ResponseLabel>NÃO</ResponseLabel>
                          </ChangeFalse>
                        </BoxChangeOption>
                      </>
                    )}
                    {changeTrue && (
                      <>
                        <ChangeLabel>Troco para quanto ?</ChangeLabel>
                        <ChangeInput
                          value={change}
                          onChangeText={setChange}
                          ref={inputChange}
                        />
                      </>
                    )}
                  </Block>
                </>
              )}
            </Selected>
          </BorderSelected>

          <BorderSelected visibled={credit}>
            <Selected onPress={() => handleOptionsPayment(1)}>
              <BoxOption>
                <Option>
                  <Brand visibled={credit} />
                </Option>
                <OptionLabel>CARTÃO</OptionLabel>
              </BoxOption>

              <Block>
                <ImageCard source={card} />
              </Block>
            </Selected>
          </BorderSelected>
        </Content>

        <ButtonPayment onPress={defineFormPayment}>
          <TextButton>Confirmar pagamento</TextButton>
        </ButtonPayment>
      </Container>
    </Background>
  );
}

export default Payment;