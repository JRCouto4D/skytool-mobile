import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { formatPrice } from '../../util/format';

import { Container, Item, Price, BoxIcons, BoxRight, Buttom } from './styles';

const ItensCart = ({ item, removeItemToCart, navigation }) => {
  const { product } = item;
  
  return (
    <Container>
      <Item>
        {`${item.amount}x  ${product.sector} | ${product.name} ${item.comments !== '' ? `(${item.comments})` : ''}`}
      </Item>

      <BoxRight>
        <Price>{formatPrice(item.itemTotal)}</Price>

        <BoxIcons>
          <Buttom onPress={() => navigation.navigate('Product', { itemCart: item })}>
            <MaterialIcons name="create" size={20} color="#9F0D8B" />
          </Buttom>
          <Buttom onPress={removeItemToCart}>
            <MaterialIcons name="delete" size={20} color="#f64c75" />
          </Buttom>
        </BoxIcons>
      </BoxRight>
    </Container>
  );
}

export default ItensCart;