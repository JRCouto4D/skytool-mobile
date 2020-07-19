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

const Address = () => {
  return (
    <Container>
      <Title>ENDEREÇO 1:</Title>
      <Block>
        <LabelBlock>
          <Label>RUA:</Label>
          <Value>Joel Santos - 41</Value>
        </LabelBlock>

        <LabelBlock>
          <Label>BAIRRO:</Label>
          <Value>Otávio Camões</Value>
        </LabelBlock>
      </Block>

      <Block>
        <LabelBlock>
          <Label>CIDADE:</Label>
          <Value>Itapetinga</Value>
        </LabelBlock>

        <LabelBlock>
          <Label>ESTADO:</Label>
          <Value>Bahia</Value>
        </LabelBlock>

        <LabelBlock>
          <Label>CEP:</Label>
          <Value>45700-000</Value>
        </LabelBlock>
      </Block>
    </Container>
  );
}

export default Address;