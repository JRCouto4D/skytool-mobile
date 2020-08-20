import React from 'react';
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
  BoxOption,
  Option,
  Brand,
  OptionLabel,
  Block,
  ChangeLabel,
  BoxChangeOption,
  BoxLeft,
  ResponseLabel,
  ChangeInput,
  ImageCard,
  ButtonPayment,
  TextButton,
} from './styles';

const Payment = () => {
  const { dataSale: sale } = useSelector((state) => state.sale);
  return (
    <Background>
      <Container>
        <Content>
          <Header>
            <LabelTotal>Valor à pagar:</LabelTotal>
            <Total>{formatPrice(sale.total)}</Total>
          </Header>

          <Label>Pagar com:</Label>

          <BorderSelected visibled={true}>
            <BoxOption>
              <Option>
                <Brand visibled={true} />
              </Option>
              <OptionLabel>DINHEIRO</OptionLabel>
            </BoxOption>

            <Block>
              <ChangeLabel>Troco ?</ChangeLabel>
              <BoxChangeOption>
                <BoxLeft>
                  <Option>
                    <Brand visibled={true} />
                  </Option>
                  <ResponseLabel>SIM</ResponseLabel>
                </BoxLeft>
                <Option>
                  <Brand visibled={false} />
                </Option>
                <ResponseLabel>NÃO</ResponseLabel>
              </BoxChangeOption>
              <ChangeLabel>Troco para quanto ?</ChangeLabel>
              <ChangeInput />
            </Block> 
          </BorderSelected>

          <BorderSelected visibled={true}>
            <BoxOption>
              <Option>
                <Brand visibled={true} />
              </Option>
              <OptionLabel>CARTÃO</OptionLabel>
            </BoxOption>

            <Block>
              <ImageCard source={card} />
            </Block>
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