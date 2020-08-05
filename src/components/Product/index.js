import React from 'react';
import { StyleSheet } from 'react-native';

import image from '../../../assets/foto.jpg';
import { Container, BoxLeft, Title, Description, Price, Image } from './styles';

const Product = () => {
  const styles = StyleSheet.create({
    containerStyle: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 3,

      width: '100%',

      backgroundColor: '#fff',
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 5,
      paddingBottom: 5,
    },
  });

  return (
    <Container style={styles.containerStyle}>
      <BoxLeft>
        <Title>Galinha Mista</Title>
        <Description>
          Pão de hambúrgue, filé bovino, frango, queijo, presunto, tomate
        </Description>
        <Price>R$ 10,00</Price>
      </BoxLeft>

      <Image source={image} />
    </Container>
  );
};

export default Product;
