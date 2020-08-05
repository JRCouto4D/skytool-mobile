import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';
import api from '../../services/api';

import Product from '../../components/Product';

import {
  Container,
  Header,
  BoxInfo,
  BoxAvatar,
  Avatar,
  Provider,
  Category,
  Evaluation,
  Note,
  BoxStatus,
  Separator,
  Status,
  PriceDelivery,
  BoxLeft,
  Sector,
  ListProducts,
} from './styles';

const Menu = ({ route, navigation }) => {
  const { provider, category } = route.params;
  const note = [1, 2, 3, 4, 5];
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);

      const response = await api.get(`/products/provider/${provider.id}`, {
        params: {
          page: 1,
          name: '',
        },
      });

      setProducts(response.data.products);
      setLoading(false);
    }

    loadProducts();
  }, []);

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
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
    },
  });

  return (
    <Container>
      <Header>
        <BoxAvatar>
          <Avatar
            source={{
              uri: provider
                ? provider.avatar.url
                : 'https://ui-avatars.com/api/?color=A28FD0&background=F4EFFC&bold=true&format=png&size=140&rounded=true&name=SKYTOOL',
            }}
          />
        </BoxAvatar>

        <BoxInfo>
          <Provider>{provider ? provider.name : ''}</Provider>
          <Category>{category || ''}</Category>
          <Evaluation>
            <Note
              data={note}
              keyExtractor={(item) => String(item)}
              renderItem={() => (
                <MaterialIcons name="star" size={15} color="#F1993B" />
              )}
            />
          </Evaluation>
        </BoxInfo>
      </Header>

      <BoxStatus style={styles.containerStyle}>
        <BoxLeft>
          <MaterialIcons name="local-shipping" color="#bbb" size={20} />
          <Separator />
          <Status>Entrega em 30-40 min</Status>
        </BoxLeft>
        <PriceDelivery>R$ 3,00</PriceDelivery>
      </BoxStatus>

      <Sector>Hambúrger:</Sector>

      <ListProducts
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Product products={item} />}
      />
    </Container>
  );
};

Menu.propTypes = {
  route: PropTypes.shape(),
  navigation: PropTypes.shape(),
};

export default Menu;
