import React, { useState, useMemo, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import Loading from '../../components/Loading';
import gears from '../../../assets/gears_2.json';
import ListDeliveries from '../../components/ListDeliveries';
import api from '../../services/api';

import {
  Container,
  Header,
  BoxLeft,
  Label,
  AmountResult,
  FilterButton,
  FilterButtonText,
  List,
} from './styles';

const Deliveries = () => {
  const [loading, setLoading] = useState(false);
  const [bug, setBug] = useState(false);
  const [orders, setOrders] = useState([]);

  async function loadOrders() {
    setLoading(true);

    const response = await api.get('orders/list');
    const data = response.data.orders.map((order) => ({
      order: {...order},
      details: {
        view: false,
      }
    }));
    setOrders(data);
    setBug(!bug);

    setLoading(false);
  }

  useEffect(() => {
    loadOrders();
  }, []);

  async function handleDetailstrue(id) {
    const response = await api.get('orders/list');
    const newData = response.data.orders.map(or => (
      or.id === id 
      ? { order: {
        ...or,
      }, details: {
        view: true,
      }} 
      : { order: {
        ...or,
      }, details: {
        view: false,
      }}
    ));
    setOrders(newData);
    setBug(!bug);
  }

  async function handleDetailsfalse(id) {
    const newData = orders.map(or => (
      or.order.id === id 
      ? { order: {
        ...or.order,
      }, 
      details: {
        view: false,
      }
    } : or
    ));
    setOrders(newData);
    setBug(!bug);
  }

  const ListMemoDeliveries = useMemo(() => {
    return (
      <List
        data={orders}
        keyExtractor={(item) => String(item.order.id)}
        renderItem={({ item }) => (
          <ListDeliveries
            order={item} 
            handleDetailstrue={() => handleDetailstrue(item.order.id)} 
            handleDetailsfalse={() => handleDetailsfalse(item.order.id)}
          />
        )}
      />
    );
  }, [orders, bug]);

  return (
    <Container>
      <Header>
        <BoxLeft>
          <Label>Todos</Label>
          <AmountResult>4 resultado</AmountResult>
        </BoxLeft>

        <FilterButton>
          <MaterialIcons name="filter-list" size={20} color="#fff" />
          <FilterButtonText>Filtrar</FilterButtonText>
        </FilterButton>
      </Header>

      {loading ? (
        <Loading animation={gears} />
      ) : ListMemoDeliveries}
    </Container>
  );
}

export default Deliveries;