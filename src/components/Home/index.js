import React from 'react';

import ListProvider from '../ListProvider';

import { Container, Label, List } from './styles';

const Home = () => {
  const data = [1, 2, 3];

  return (
    <Container>
      <Label>MAIS POPULARES:</Label>

      <List
        data={data}
        keyExtractor={(item) => String(item)}
        renderItem={() => <ListProvider />}
      />
    </Container>
  );
};

export default Home;
