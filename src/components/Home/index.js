import React from 'react';

import Category from '../Category';
import ListProvider from '../ListProvider';

import { Container, Label, List } from './styles';

const Home = () => {
  const data = [1, 2, 3];

  return (
    <Container>
      <Category />

      <Label>MAIS POPULARES:</Label>

      <List
        data={data}
        key={(item) => String(item)}
        renderItem={({ item }) => (
          <ListProvider />
        )}
      />
    </Container>
  );
}

export default Home;