import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import logo from '../../../../assets/LOGO_3.jpg';

import {
  Container,
  Content,
  BoxLeft,
  Logo,
  BoxInfo,
  InfoHeader,
  ProviderName,
  ProviderSector,
  BlockLabel,
  Label,
  Value,
  DetailsButton,
} from './styles';

const LessDetails = () => {
  return (
    <Container>
      <Content>
        <BoxLeft>
          <Logo source={logo} />
          <BoxInfo>
            <InfoHeader>
              <ProviderName>The Best Esfihas</ProviderName>
              <ProviderSector>Esfiharia</ProviderSector>
            </InfoHeader>
            <BlockLabel>
              <Label>Pedido:</Label>
              <Value>#240</Value>
            </BlockLabel>

            <BlockLabel>
              <Label>Data:</Label>
              <Value>26/08/2020</Value>
            </BlockLabel>

            <BlockLabel>
              <Label>Status:</Label>
              <Value>Entregue</Value>
            </BlockLabel>
          </BoxInfo>
        </BoxLeft>

        <DetailsButton onPress={() => {}}>
          <MaterialIcons name="keyboard-arrow-down" size={25} color="#ccc" />
        </DetailsButton>
      </Content>
    </Container>
  );
}

export default LessDetails;