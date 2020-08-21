import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { formatPrice } from '../../util/format';
import Background from '../../components/Background';
import card from '../../../assets/cards.png';

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

const Payment = () => {
  const { dataSale: sale } = useSelector((state) => state.sale);

  const [money, setMoney] = useState(true);
  const [credit, setCredit] = useState(false);
  const [changeTrue, setChangeTrue] = useState(false);
  const [changeFalse, setChanegFalse] = useState(true);
  const [change, setChange] = useState('');

  function handleOptionsPayment(option){
    if (option === 0) {
      setMoney(true);
      setCredit(false);
    } else {
      setMoney(false);
      setCredit(true);
      setChanegFalse(true);
      setChangeTrue(false);
    }
  }

  function handleOptionsChange(option){
    if (option === 0) {
      setChangeTrue(true);
      setChanegFalse(false);
    } else {
      setChangeTrue(false);
      setChanegFalse(true);
    }
  }

  useEffect(() => {
    if(sale) {
      if (sale.payment === 'A VISTA') {
        handleOptionsPayment(0);
        if (sale.change_for !== null) {
          setChange(sale.change_for);
        } else {
          handleOptionsChange(1);
        }
      }
    } else {
      handleOptionsPayment(1);
    }
  }, []);

  return (
    <Background>
      <Container>
        <Content>
          <Header>
            <LabelTotal>Valor à pagar:</LabelTotal>
            <Total>{formatPrice(sale.total)}</Total>
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

        <ButtonPayment>
          <TextButton>Confirmar pagamento</TextButton>
        </ButtonPayment>
      </Container>
    </Background>
  );
}

export default Payment;