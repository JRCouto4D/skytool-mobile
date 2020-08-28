import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import ListDeliveries from '../../components/ListDeliveries';

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
  const deliveries = [1];

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

      <List
        data={deliveries}
        keyExtractor={(item) => String(item)}
        renderItem={() => (
          <ListDeliveries />
        )}
      />
    </Container>
  );
}

export default Deliveries;