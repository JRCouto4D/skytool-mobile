import React from 'react';
import { formatPrice } from '../../util/format';

import { Container, Item, Price } from './styles';

const ItensCart2 = ({ itens }) => {
  return (
    <Container>
      <Item>{`${itens.amount}x  ${itens.product.sector} | ${itens.product.name}${itens.comments !== '' ? `(${itens.comments})` : ''}`}</Item>
      <Price>{formatPrice(itens.itemTotal)}</Price>
    </Container>
  );
}

export default ItensCart2;