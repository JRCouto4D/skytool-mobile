import React from 'react';

import { Container, BoxIcon, Image, TextIcon } from './styles';

const Category = ({ category, navigation }) => {
  return (
    <Container>
      <BoxIcon onPress={() => navigation.navigate('LisProvider', { category })}>
        <Image source={{ uri: category.image.url }} />
        <TextIcon>{category.name}</TextIcon>
      </BoxIcon>
    </Container>
  );
};

export default Category;
