import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { formatPrice } from '../../util/format';
import api from '../../services/api';
import { confirmToSaleRequest } from '../../store/module/sale/actions';

import Background from '../../components/Background';
import Itens from '../../components/ItensCart2';

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

const Confirmation = ({ navigation, route }) => {
  const { provider } = route.params;
  const { dataSale, subtotal, priceDelivery } = useSelector((state) => state.sale);
  const { address } = useSelector((state) => state.user.profile);
  const itens = useSelector((state) => state.cart.item);

  const dispatch = useDispatch();

  const [dataAddress, setDataAddress] = useState(null);

  useEffect(() => {
    const data = address.filter(ad => ad.id === dataSale.address_id);
    setDataAddress(data);
  }, []);

  function confirmToSale() {
    const data = {
      sale_id: dataSale.id,
      payment: dataSale.payment,
      change_for: dataSale.change_for === 0 ? null : dataSale.change_for,
      address_id: dataSale.address_id, 
    };

    dispatch(confirmToSaleRequest(data));
    navigation.reset({
      routes: [{ name: 'Orders'}],
    });
  }

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
          >{`#${dataSale.id}`}</Label>
          <ListItens
            data={itens}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Itens itens={item} />
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
              >{formatPrice(subtotal)}</Label>
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
              >{formatPrice(priceDelivery)}</Label>
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
            >{dataSale ? formatPrice(dataSale.total) : 'R$0,00'}</Label>
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
                    >{dataAddress 
                      ? ` ${dataAddress[0].street} - ${dataAddress[0].number}` 
                      : ''
                    }</Label>
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
                    >{dataAddress ? ` ${dataAddress[0].neighborhood}` : ''}</Label>
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
                    >{dataAddress ? ` ${dataAddress[0].city}` : ''}</Label>
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
                    >{dataAddress ? ` ${dataAddress[0].state}` : ''}</Label>
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
                  >{dataAddress ? ` ${dataAddress[0].zip_code}` : ''}</Label>
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
                  >
                    {dataSale.payment === 'A VISTA'
                    ? 'DINHEIRO'
                    : 'CARTÃO'
                  }
                  </Label>

                  <Label
                    size={10}
                    weigth="bold"
                    color="rgba(255, 255, 255, 0.7)"
                  >
                    {dataSale.change_for === 0 || dataSale.change_for === null
                     ? ''
                     : `Troco para ${formatPrice(Number(dataSale.change_for))}` 
                    }
                  </Label>
                </BoxLeftHeader>
              </BoxRigth>
            </Footer>
        </Content>

        <BoxImage>
          <Image
            source={{
              uri: provider && provider.avatar
                ? provider.avatar.url
                : `https://ui-avatars.com/api/?color=A28FD0&background=F4EFFC&bold=true&format=png&size=140&rounded=true&name=${provider ? provider.name : 'SKYTOOL'}`,
            }}
          />
        </BoxImage>

        <Buttom onPress={confirmToSale}>
          <ButtomText>Confirmar pedido</ButtomText>
        </Buttom>
      </Container>
    </Background>
  );
}

export default Confirmation;