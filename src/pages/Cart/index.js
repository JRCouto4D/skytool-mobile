import React, { useState, useEffect, useMemo } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { removeToItemCart } from '../../store/module/bag/actions';
import { completeSaleSuccess } from '../../store/module/sale/actions';
import { formatPrice } from '../../util/format';

import Address from '../../components/Address2';
import ItensCart from '../../components/ItensCart';
import api from '../../services/api';

import { 
  Container,
  Content,
  BoxLoading,
  BoxAddress,
  Label,
  ListAddress,
  BoxItens,
  Provider,
  ListItens,
  AddButtom,
  TextButtom,
  LabelBlock,
  TagLabel,
  CompletedButtom,
  TextCompletedButtom,
} from './styles';

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const { sale_id, item: itemCart, loading } = useSelector((state) => state.bag);
  const { profile } = useSelector((state) => state.user);
  const [adresses, setAdresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [sale, setSale] = useState([]);
  const [infoDelivery, setInfoDelivery] = useState([]);
  const [bug, setBug] = useState(false);
  const [total, setTotal] = useState(null);

  async function loadInfoDelivery() {
    if (itemCart.length >= 1) {
      if (sale.length >= 1) {
        const response = await api.get(`infoDelivery/${sale[0].provider_id}`);
  
        setInfoDelivery(response.data);
      }
    } else {
      setInfoDelivery([]);
    }
  }

  function calcTotal() {
    if (itemCart.length >= 1) {
      if (sale.length >= 1 && infoDelivery.length >= 1) {
        const total = sale[0].total + infoDelivery[0].price;
        setTotal(total);
      }
    } else {
      setTotal(null);
    }
  }

  async function loadSale() {
    if (sale_id) {
      const response = await api.get('sales', {
        where: {
          id: sale_id,
        }
      });

      setSale(response.data);
    }
  }

  useEffect(() => {
    async function loadAdresses() {
      const response = await api.get('adresses', {
        where: {
          user_id: profile.id,
        }
      });
      const data = response.data.map((address) => ({
        ...address,
        able: false,
      }));
      data[0].able = true;
      setSelectedAddress(data[0].id);
  
      setAdresses(data);
    }

    loadAdresses();
  }, []);

  async function handleActiveAddress(address_id) {
    const stateAdresses = adresses;
    const indexAddress = stateAdresses.findIndex((state) => state.id === address_id);
    if (stateAdresses.length === 2) {
      if (indexAddress === 0) {
        stateAdresses[indexAddress].able = true;
        stateAdresses[1].able = false;
      } else {
        stateAdresses[indexAddress].able = true;
        stateAdresses[0].able = false;
      }
    }
    if (stateAdresses.length === 1) {
      stateAdresses[0].able = true;
    }
    
    setAdresses(stateAdresses);
    setSelectedAddress(stateAdresses[indexAddress].id);
    setBug(!bug);
    
  }

  const handleListAddress = useMemo(() => {
    return (
      <ListAddress
        data={adresses}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Address 
            address={item}
            handleActiveAddress={() => handleActiveAddress(item.id)}
          />
        )}
      />
    );
  }, [adresses, bug]);

  async function removeItemToCart(item_id) {
    try {
      await api.delete(`removeItem/${item_id}`);
      dispatch(removeToItemCart(item_id));
    } catch (err) {
      Alert.alert('Erro', 'Algo deu errado ao remover o item do carrinho');
    }
  }

  const listItensCartMemo = useMemo(() => {
    return (
      <ListItens
        data={itemCart}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ItensCart 
            item={item}
            removeItemToCart={() => removeItemToCart(item.id)}
            navigation={navigation} 
          />
        )}
      />
    );
  }, [itemCart]);

  useMemo(() => loadSale(), [itemCart]);
  useMemo(() => loadInfoDelivery(), [sale]);
  useMemo(() => calcTotal(), [sale, infoDelivery]);

  async function completeOrder() {
    console.tron.log('completeOrder');
      if (itemCart.length >= 1) {
        if (selectedAddress) {
          if (total) {
            const data = {
              total,
              address_id: selectedAddress,
            }
            dispatch(completeSaleSuccess(data));
            navigation.navigate('Payment');
          } 
        } else {
          Alert.alert('### Ops!!! ###', 'Você não pode concluir o pedido sem antes selecionar o endereço para entrega');
        }
      } else {
        Alert.alert('### Ops!!! ###', 'Você não pode concluir o pedido estando com o carrinho vazio.');
      }
  }

  return (
    <Container>
      <Content>
        <BoxAddress>
          <Label>Entregar em:</Label>
          {handleListAddress}
        </BoxAddress>

        <BoxItens>
          <Provider>{
            itemCart[0] 
            ? itemCart[0].product.provider.name 
            : 'Carrinho de compras está vazio'
          }</Provider>

          {loading ? (
            <BoxLoading>
              <ActivityIndicator size="small" color="#9F0D8B" />
            </BoxLoading>
          ) : (
            <>
              {listItensCartMemo}

              <AddButtom onPress={() => navigation.navigate('Menu')}>
                <TextButtom>Continuar comprando</TextButtom>
              </AddButtom>

              <LabelBlock>
                <TagLabel color="#ccc" size={12}>Subtotal</TagLabel>
                <TagLabel color="#ccc" size={12}>
                  {sale.length >= 1 ? formatPrice(sale[0].total) : 'R$0,00'}
                </TagLabel>
              </LabelBlock>

              <LabelBlock>
                <TagLabel color="#aaa" size={12}>Entrega</TagLabel>
                <TagLabel color="#aaa" size={12}>
                  {infoDelivery.length >= 1 
                  ? formatPrice(infoDelivery[0].price) 
                  : 'R$0,00'}
                </TagLabel>
              </LabelBlock>

              <LabelBlock style={{
                marginTop: 20,
              }}>
                <TagLabel color="#333" size={18}>Total</TagLabel>
                <TagLabel color="#333" size={18}>
                  {total ? formatPrice(total) : 'R$0,00'}
                </TagLabel>
              </LabelBlock>
            </>
          )}
        </BoxItens>
      </Content>

      <CompletedButtom onPress={completeOrder}>
        <TextCompletedButtom>Definir Pagamento</TextCompletedButtom>
      </CompletedButtom>
    </Container>
  );
}

export default Cart;