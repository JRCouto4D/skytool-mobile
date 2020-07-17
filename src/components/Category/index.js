import React from 'react';
import { Text } from 'react-native';

import barbeiro from '../../../assets/icons/BARBEIRO.png';
import restaurante from '../../../assets/icons/RESTAURANTES.png';
import pizzaria from '../../../assets/icons/PIZZARIA.png';
import hamburgueria from '../../../assets/icons/HAMBURGUERIA.png';
import salao from '../../../assets/icons/SALÃO.png';
import lista from '../../../assets/icons/CATEGORIAS.png';

import { Container, BoxList, BoxIcon, Image, TextIcon } from './styles';

const Category = () => {
  return (
    <Container>
      <BoxList>
        <BoxIcon>
          <Image source={hamburgueria} />
          <TextIcon>HAMBURGUERIA</TextIcon>
        </BoxIcon>

        <BoxIcon>
          <Image source={pizzaria} />
          <TextIcon>PIZZARIA</TextIcon>
        </BoxIcon>

        <BoxIcon>
          <Image source={restaurante} />
          <TextIcon>RESTAURANTE</TextIcon>
        </BoxIcon>
      </ BoxList>

      <BoxList>
        <BoxIcon>
          <Image source={barbeiro} />
          <TextIcon>BARBEIRO</TextIcon>
        </BoxIcon>

        <BoxIcon>
          <Image source={salao} />
          <TextIcon>SALÃO DE BELEZA</TextIcon>
        </BoxIcon>

        <BoxIcon>
          <Image source={lista} />
          <TextIcon>VER TODOS</TextIcon>
        </BoxIcon>
      </ BoxList>
    </Container>
  );
}

export default Category;