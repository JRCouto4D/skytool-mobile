import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Background from '../../components/Background';
import Categories from '../../components/Category';
import Loading from '../../components/Loading';

import { Container, Label, List } from './styles';

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
        <Loading />
      ) : (
        <Container>
          <Label>CATEGORIAS</Label>

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
