import React from 'react';
import { Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import logo from '../../../../assets/LOGO_3.jpg';
import {
  Content,
  Header,
  Logo,
  BoxLeft,
  ProviderName,
  ProviderSector,
  Body,
  OrderLabel,
  BlockStatus,
  BoxStatus,
  BoxBall,
  Ball,
  Status,
  LineStatus,
  BlockLabel,
  BoxLabel,
  Label,
  Value,
  Footer,
  LessDetailsButton,
  DetailsButton,
  TextDetailsButton,
} from './styles';

const MoreDetails = () => {
  return (
    <Content>
      <Header>
        <Logo source={logo} />
        <BoxLeft>
          <ProviderName>The Best Esfihas The Best Esfihas</ProviderName>
          <ProviderSector>Esfiharia</ProviderSector>
        </BoxLeft>
      </Header>

      <Body>
        <OrderLabel>Pedido: #240</OrderLabel>
        <BlockStatus>
          <LineStatus />
          <BoxStatus>
            <BoxBall>
              <Ball status={true} />
            </BoxBall>
            <Status>Aceito</Status>
          </BoxStatus>

          <BoxStatus>
            <BoxBall>
              <Ball status={true} />
            </BoxBall>
            <Status>Em produção</Status>
          </BoxStatus>

          <BoxStatus>
            <BoxBall>
              <Ball status={false} />
            </BoxBall>
            <Status>Saiu para entrega</Status>
          </BoxStatus>

          <BoxStatus>
            <BoxBall>
              <Ball status={false} />
            </BoxBall>
            <Status>Entregue</Status>
          </BoxStatus>
        </BlockStatus>

        <BlockLabel>
          <BoxLabel>
            <Label>Aceito às:</Label>
            <Value>10:22 hs</Value>
          </BoxLabel>

          <BoxLabel>
            <Label>Foi para produção às:</Label>
            <Value>10:30 hs</Value>
          </BoxLabel>
        </BlockLabel>

        <BlockLabel>
          <BoxLabel>
            <Label>Saiu para entrega às:</Label>
            <Value></Value>
          </BoxLabel>

          <BoxLabel>
            <Label>Entregue às:</Label>
            <Value></Value>
          </BoxLabel>
        </BlockLabel>
      </Body>

      <Footer>
        <LessDetailsButton>
          <MaterialIcons name="keyboard-arrow-up" size={25} color="#ccc" />
        </LessDetailsButton>

        <DetailsButton>
          <TextDetailsButton>Detalhes</TextDetailsButton>
        </DetailsButton>
      </Footer>
    </Content>
  );
}

export default MoreDetails;