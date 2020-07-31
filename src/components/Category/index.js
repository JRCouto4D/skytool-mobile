import React from 'react';

import barbeiro from '../../../assets/icons/BARBEIRO.png';
import restaurante from '../../../assets/icons/RESTAURANTES.png';
import pizzaria from '../../../assets/icons/PIZZARIA.png';
import hamburgueria from '../../../assets/icons/HAMBURGUERIA.png';
import salao from '../../../assets/icons/SALÃO.png';
import lista from '../../../assets/icons/CATEGORIAS.png';

import { Container, BoxList, BoxIcon, Image, TextIcon } from './styles';

const Category = ({ category }) => {
  console.tron.log(category);
  return (
    <Container>
      <BoxIcon>
        <Image source={{ uri: category.image.url }} />
        <TextIcon>{category.name}</TextIcon>
      </BoxIcon>
    </Container>
  );
}

export default Category;