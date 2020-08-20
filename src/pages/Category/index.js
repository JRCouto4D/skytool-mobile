import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';

import Background from '../../components/Background';
import Categories from '../../components/Category';
import gears from '../../../assets/gears_2.json';
import Loading from '../../components/Loading';

import { Container, Header, BackButtom, Label, List } from './styles';

const Category = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      setLoading(true);

      const response = await api.get('/categories', {
        params: {
          name: '',
          page: 1,
        },
      });

      setCategories(response.data.categories);
      setLoading(false);
    }

    loadCategories();
  }, []);

  return (
    <Background>
      {loading ? (
        <Loading animation={gears} />
      ) : (
        <Container>
          <Header>
            <BackButtom onPress={() => navigation.goBack()}>
              <MaterialIcons name="arrow-back" size={30} color="#fff" />
            </BackButtom>
            <Label>CATEGORIAS</Label>
          </Header>

          <List
            data={categories}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Categories category={item} navigation={navigation} />
            )}
          />
        </Container>
      )}
    </Background>
  );
};

export default Category;
