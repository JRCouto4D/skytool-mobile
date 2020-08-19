import React, { useState, useEffect, useMemo } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../services/api';
import Lottie from 'lottie-react-native';

import { MaterialIcons } from '@expo/vector-icons';

import ListProvider from '../../../components/ListProvider';
import gears from '../../../../assets/gears_2.json';
import Loading from '../../../components/Loading';
import notFound from '../../../../assets/not_found.json';

import { cancelToSaleRequest } from '../../../store/module/bag/actions';

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
  const category = route.params.category;
  const { sale_id } = useSelector((state) => state.bag);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProvider() {
      setLoading(true);

      const response = await api.get(`/provider/category/${category.id}`, {
        params: {
          page: 1,
          name: '',
        }
      });
      
      setProviders(response.data.providers);
      setLoading(false);
    }

    loadProvider();
    
  }, []);

  useMemo(async () => {
    async function removeItens(sale_id) {
      const response = await api.get('addItem', {
        where: {
          sale_id,
        }
      });

      const itens = response.data;

      if (itens.length >= 1) {
        itens.map(async (item) => await api.delete(`removeItem/${item.id}`));
      }
    }

    if (isFocused) {
      if (sale_id) {
        await removeItens(sale_id);

        dispatch(cancelToSaleRequest(sale_id));
      }
    }
  }, [isFocused]);

  return (
    <Container>
      {loading ? (
        <Loading animation={gears} />
      ) : (
        providers.length >= 1 ? (
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
        )
      )}
    </Container>
  );
}

export default List;