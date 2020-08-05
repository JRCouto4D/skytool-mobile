/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react-native';
import PropTypes from 'prop-types';

import { MaterialIcons } from '@expo/vector-icons';
import api from '../../../services/api';

import ListProvider from '../../../components/ListProvider';
import Loading from '../../../components/Loading';
import notFound from '../../../../assets/not_found.json';

import {
  Container,
  Header,
  BoxLeft,
  Label,
  Result,
  FilterButton,
  TextButton,
  ProviderList,
  Content,
  Message,
} from './styles';

const List = ({ route, navigation }) => {
  const { category } = route.params;
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProvider() {
      setLoading(true);

      const response = await api.get(`/provider/category/${category.id}`, {
        params: {
          page: 1,
          name: '',
        },
      });

      setProviders(response.data.providers);
      setLoading(false);
    }

    loadProvider();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : providers.length >= 1 ? (
        <>
          <Header>
            <BoxLeft>
              <Label>TODOS</Label>
              <Result>{`${providers.length} resultados`}</Result>
            </BoxLeft>

            <FilterButton>
              <MaterialIcons name="filter-list" size={20} color="#FFF" />
              <TextButton>Filtrar</TextButton>
            </FilterButton>
          </Header>

          <ProviderList
            data={providers}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <ListProvider
                provider={item}
                category={category.name}
                navigation={navigation}
              />
            )}
          />
        </>
      ) : (
        <Content>
          <Lottie
            source={notFound}
            autoPlay
            autoSize
            loop
            resizeMode="contain"
          />
          <Message>Ainda não temos prestadores para esta categorias</Message>
        </Content>
      )}
    </Container>
  );
};

List.propTypes = {
  route: PropTypes.shape(),
  navigation: PropTypes.shape(),
};

export default List;
