import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import barbeiro from '../../../assets/icons/BARBEIRO.png';
import restaurante from '../../../assets/icons/RESTAURANTES.png';
import pizzaria from '../../../assets/icons/PIZZARIA.png';
import hamburgueria from '../../../assets/icons/HAMBURGUERIA.png';
import salao from '../../../assets/icons/SALÃO.png';
import anuncio from '../../../assets/icons/ANÚNCIOS.png';
import confeitaria from '../../../assets/icons/CONFEITARIA.png';
import esfirraria from '../../../assets/icons/ESFIHARIA.png';
import personal from '../../../assets/icons/PERSONAL.png';



import Background from '../../components/Background';
import Categories from '../../components/Category';

import { Container, Label, List } from './styles';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      setLoading(true);

      const response = await api.get('/categories', {
        params: {
          name: '',
          page: 1,
        }
      });

      setCategories(response.data.categories);
      setLoading(false);
    }

    loadCategories();
  }, []);

  return (
    <Background>
      <Container>
        <Label>CATEGORIAS</Label>

        <List
          data={categories}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Categories category={item} />
          )}
        />
      </Container>
    </Background>
  );
}

export default Category;