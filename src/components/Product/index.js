import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import { formatPrice } from '../../util/format';

import { Container, BoxLeft, Title, Description, Price, Image } from './styles';

const Product = ({ products, open, navigation }) => {
  const styles = StyleSheet.create({
    containerStyle: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 3,

      backgroundColor: '#FFF',
      alignSelf: 'stretch',
      marginRight: 10,
      marginBottom: 15,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 8,
      paddingRight: 8,
      borderRadius: 4,

      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      opacity: open ? 1 : 0.5,
    },
  });

  return (
    <RectButton
      onPress={() => navigation.navigate('Product', products)}
      style={styles.containerStyle}
      enabled={open}
    >
      <BoxLeft>
        <Title>{products ? products.name : ''}</Title>
        <Description>{products ? products.description : ''}</Description>
        <Price>{products ? formatPrice(products.value) : 'R$'}</Price>
      </BoxLeft>

      <Image
        source={{
          uri: products && products.image
            ? products.image.url
            : 'https://ui-avatars.com/api/?color=A28FD0&background=F4EFFC&bold=true&format=png&size=140&rounded=true&name=SKYTOOL',
        }}
      />
    </RectButton>
  );
};

Product.propTypes = {
  products: PropTypes.shape(),
  open: PropTypes.bool,
  navigation: PropTypes.shape(),
};

export default Product;
