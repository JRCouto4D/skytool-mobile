import React from 'react';
import { formatPrice } from '../../util/format';

import Background from '../../components/Background';
import Itens from '../../components/ItensCart2';
import image from '../../../assets/foto.jpg';

import {
  Container,
  Content,
  Label,
  ListItens,
  BoxInfoSale,
  Block,
  Footer,
  BlockFooter,
  BoxLeft,
  BoxLeftHeader,
  BoxRigth,
  BoxImage,
  Image,
  Buttom,
  ButtomText,
} from './styles';

const Confirmation = () => {
  const itens = [1, 2, 3];

  return (
    <Background>
      <Container>
        <Content>
          <Label
            size={14}
            weigth={'bold'}
            color="rgba(255, 255, 255, 0.9)"
          >PEDIDO:</Label>
          <Label
            size={12}
            weigth={'normal'}
            color="rgba(255, 255, 255, 0.9)"
          >#200</Label>
          <ListItens
            data={itens}
            keyExtractor={(item) => String(item)}
            renderItem={() => (
              <Itens />
            )}
          />

          <BoxInfoSale>
            <Block>
              <Label
                size={14}
                weigth="bold"
                color="rgba(255, 255, 255, 0.7)"
              >Subtotal</Label>

              <Label
                size={14}
                weigth="normal"
                color="rgba(255, 255, 255, 0.7)"
              >{formatPrice(22.5)}</Label>
            </Block>

            <Block>
              <Label
                size={14}
                weigth="bold"
                color="rgba(255, 255, 255, 0.7)"
              >Entrega</Label>

              <Label
                size={14}
                weigth="normal"
                color="rgba(255, 255, 255, 0.7)"
              >{formatPrice(5)}</Label>
            </Block>
          </BoxInfoSale>

          <Block>
            <Label
              size={20}
              weigth="bold"
              color="rgba(255, 255, 255, 0.9)"
            >Total</Label>

            <Label
              size={20}
              weigth="normal"
              color="rgba(255, 255, 255, 0.9)"
            >{formatPrice(27.5)}</Label>
          </Block>

            <Footer>
              <BoxLeft>
                <Label
                  size={12}
                  weigth="bold"
                  color="rgba(255, 255, 255, 0.9)"
                >Entregar em:</Label>
                <BoxLeftHeader>
                  <BlockFooter>
                    <Label
                      size={10}
                      weigth="bold"
                      color="rgba(255, 255, 255, 0.7)"
                    >RUA:</Label>

                    <Label
                      size={10}
                      weigth="normal"
                      color="rgba(255, 255, 255, 0.7)"
                    > Joel Santos - 41</Label>
                  </BlockFooter>

                  <BlockFooter>
                    <Label
                      size={10}
                      weigth="bold"
                      color="rgba(255, 255, 255, 0.7)"
                    >BAIRRO:</Label>

                    <Label
                      size={10}
                      weigth="normal"
                      color="rgba(255, 255, 255, 0.7)"
                    > Otávio Camões</Label>
                  </BlockFooter>
                </BoxLeftHeader>

                <BlockFooter>
                    <Label
                      size={10}
                      weigth="bold"
                      color="rgba(255, 255, 255, 0.7)"
                    >CIDADE:</Label>

                    <Label
                      size={10}
                      weigth="normal"
                      color="rgba(255, 255, 255, 0.7)"
                    > Itapetinga</Label>
                  </BlockFooter>

                  <BlockFooter>
                    <Label
                      size={10}
                      weigth="bold"
                      color="rgba(255, 255, 255, 0.7)"
                    >ESTADO:</Label>

                    <Label
                      size={10}
                      weigth="normal"
                      color="rgba(255, 255, 255, 0.7)"
                    > Bahia</Label>
                  </BlockFooter>
                <BlockFooter>
                  <Label
                    size={10}
                    weigth="bold"
                    color="rgba(255, 255, 255, 0.7)"
                  >CEP:</Label>

                  <Label
                    size={10}
                    weigth="normal"
                    color="rgba(255, 255, 255, 0.7)"
                  > 45700-000</Label>
                </BlockFooter>
              </BoxLeft>

              <BoxRigth>
                <Label
                  size={12}
                  weigth="bold"
                  color="rgba(255, 255, 255, 0.9)"
                >Pagamento:</Label>

                <BoxLeftHeader>
                  <Label
                    size={10}
                    weigth="bold"
                    color="rgba(255, 255, 255, 0.7)"
                  >DINHEIRO</Label>

                  <Label
                    size={10}
                    weigth="bold"
                    color="rgba(255, 255, 255, 0.7)"
                  >Troco para R$50,00</Label>
                </BoxLeftHeader>
              </BoxRigth>
            </Footer>
        </Content>

        <BoxImage>
          <Image source={image} />
        </BoxImage>

        <Buttom onPress={() => {}}>
          <ButtomText>Confirmar pedido</ButtomText>
        </Buttom>
      </Container>
    </Background>
  );
}

export default Confirmation;