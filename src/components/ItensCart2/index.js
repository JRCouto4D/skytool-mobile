import React from 'react';
import { formatPrice } from '../../util/format';

import { Container, Item, Price } from './styles';

const ItensCart2 = () => {
  return (
    <Container>
      <Item>2x ESFIHAS | Carne (Sem temperos extras)</Item>
      <Price>{formatPrice(7.5)}</Price>
    </Container>
  );
}

export default ItensCart2;