import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

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

const Cart = () => {
  const { sale_id, item: itemCart, loading } = useSelector((state) => state.bag);
  const { product } = itemCart;
  const { profile } = useSelector((state) => state.user);
  const [adresses, setAdresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [sale, setSale] = useState([]);
  const [infoDelivery, setInfoDelivery] = useState([]);
  const [bug, setBug] = useState(false);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    async function loadAdresses() {
      console.tron.log(itemCart);
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

  return (
    <Container>
      <Content>
        <BoxAddress>
          <Label>Entregar em:</Label>
          {handleListAddress}
        </BoxAddress>

        <BoxItens>
        <Provider>The Best Esfihas</Provider>
        </BoxItens>
        
      </Content>

      <CompletedButtom>
        <TextCompletedButtom>Concluir pedido</TextCompletedButtom>
      </CompletedButtom>
    </Container>
  );
}

export default Cart;