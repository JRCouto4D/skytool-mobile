import React from 'react';
import { Text } from 'react-native';

import { 
  Container, 
  Title, 
  Block, 
  LabelBlock, 
  Label, 
  Value, 
} from './styles';

const Address = ({ address }) => {
  return (
    <Container>
      <Title>ENDEREÇO 1:</Title>
      <Block>
        <LabelBlock>
          <Label>RUA:</Label>
          <Value>{`${address.street} - ${address.number}`}</Value>
        </LabelBlock>

        <LabelBlock>
          <Label>BAIRRO:</Label>
          <Value>{address.neighborhood}</Value>
        </LabelBlock>
      </Block>

      <Block>
        <LabelBlock>
          <Label>CIDADE:</Label>
          <Value>{address.city}</Value>
        </LabelBlock>

        <LabelBlock>
          <Label>ESTADO:</Label>
          <Value>{address.state}</Value>
        </LabelBlock>

        <LabelBlock>
          <Label>CEP:</Label>
          <Value>{address.zip_code}</Value>
        </LabelBlock>
      </Block>
    </Container>
  );
}

export default Address;