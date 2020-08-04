import React from 'react';

import ListProvider from '../ListProvider';

import { Container, Label, List, Failure } from './styles';

const Search = () => {
  const data = [1];

  return (
    <Container>
      {data.length >= 1 ? (
        <>
          <Label>Resultados:</Label>
          <List
            data={data}
            key={(item) => String(item)}
            renderItem={() => <ListProvider />}
          />
        </>
      ) : (
        <Failure>Nenhum resultado!</Failure>
      )}
    </Container>
  );
};

export default Search;
