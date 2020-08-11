import React from 'react';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import { 
  Container,
  BackButton,
  Title,
  BoxButons,
  SeachButton,
  BagButton,
  BoxBagAmount,
  BagAmount,
} from './styles';

const Header = ({ route, navigation }) => {
  const { item } = useSelector((state) => state.bag);

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={30} color="#fff" />
      </BackButton>

      <Title>
        {
        route.params.provider.name.length > 18
          ? `${route.params.provider.name.substr(0, 18)}...`
          : route.params.provider.name
        }
      </Title>

      <BoxButons>
        <SeachButton onPress={() => {}}>
          <MaterialIcons name="search" size={25} color="#FFF" />
        </SeachButton>

        <BagButton onPress={() => navigation.navigate('Cart', { itens: item })}>
          <MaterialIcons name="shopping-basket" size={25} color="#FFF" />
        </BagButton>

        {item.length >= 1 && (
          <BoxBagAmount>
            <BagAmount>{item ? `${item.length}` : ''}</BagAmount>
          </BoxBagAmount>
        )}
      </BoxButons>


    </Container>
  );
}

export default Header;