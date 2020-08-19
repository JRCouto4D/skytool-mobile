import React, { useState, useEffect, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { removeToItemCart } from '../../store/module/bag/actions';

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

  function removeItemToCart(item_id) {
    dispatch(removeToItemCart(item_id));
  }

  const listItensCartMemo = useMemo(() => (
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
  ), [itemCart]);

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
                <TagLabel 
                  color="#ccc" 
                  size={12}>R$0,00
                </TagLabel>
              </LabelBlock>

              <LabelBlock>
                <TagLabel color="#aaa" size={12}>Entrega</TagLabel>
                <TagLabel 
                  color="#aaa" 
                  size={12}>R$0,00
                </TagLabel>
              </LabelBlock>

              <LabelBlock style={{
                marginTop: 20,
              }}>
                <TagLabel color="#333" size={18}>Total</TagLabel>
                <TagLabel 
                  color="#333" 
                  size={18}>R$0,00
                </TagLabel>
              </LabelBlock>
            </>
          )}
        </BoxItens>
      </Content>

      <CompletedButtom>
        <TextCompletedButtom>Concluir pedido</TextCompletedButtom>
      </CompletedButtom>
    </Container>
  );
}

export default Cart;