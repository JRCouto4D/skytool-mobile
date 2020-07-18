import React from 'react';

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

import { Container, Label, BoxList, BoxIcon, Image, TextIcon } from './styles';

const Category = () => {
  return (
    <Background>
      <Container>
        <Label>CATEGORIAS</Label>

        <BoxList>
          <BoxIcon>
            <Image source={hamburgueria} />
            <TextIcon>HAMBURGUERIA</TextIcon>
          </BoxIcon>

          <BoxIcon>
            <Image source={pizzaria} />
            <TextIcon>PIZZARIA</TextIcon>
          </BoxIcon>

          <BoxIcon>
            <Image source={restaurante} />
            <TextIcon>RESTAURANTE</TextIcon>
          </BoxIcon>
      </ BoxList>

      <BoxList>
        <BoxIcon>
          <Image source={barbeiro} />
          <TextIcon>BARBEIRO</TextIcon>
        </BoxIcon>

        <BoxIcon>
          <Image source={salao} />
          <TextIcon>SALÃO DE BELEZA</TextIcon>
        </BoxIcon>

        <BoxIcon>
          <Image source={personal} />
          <TextIcon>PERSONAL TRAINER</TextIcon>
        </BoxIcon>
      </BoxList>

      <BoxList>
        <BoxIcon>
          <Image source={anuncio} />
          <TextIcon>ANÚNCIOS</TextIcon>
        </BoxIcon>

        <BoxIcon>
          <Image source={esfirraria} />
          <TextIcon>ESFIRRARIA</TextIcon>
        </BoxIcon>

        <BoxIcon>
          <Image source={confeitaria} />
          <TextIcon>CONFEITARIA</TextIcon>
        </BoxIcon>
      </BoxList>
      </Container>
    </Background>
  );
}

export default Category;