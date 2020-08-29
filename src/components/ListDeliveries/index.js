import React from 'react';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import Loading from '../Loading';
import load from '../../../assets/loading.json';
import { styles } from '../../util/globalStyles';
import {
  Container,
  Content,
  Header,
  BoxRight,
  Logo,
  BoxInfo,
  InfoProvider,
  ProviderName,
  ProviderSector,
  InfoOrder,
  BlockLabel,
  Label,
  Value,
  MoreStatusButton,
  Body,
  BlockStatus,
  BoxStatus,
  BoxBall,
  Ball,
  Status,
  LineStatus,
  BlockOrder,
  BoxOrder,
  Footer,
  DetailsButton,
  TextDetailsButton,
  LessStatusButton,
} from './styles';


const ListDeliveries = ({ order, handleDetailstrue, handleDetailsfalse }) => {
  const { order: item, details } = order;
  console.tron.log(item);

  return (
    <Container style={styles.containerStyle}>
      <Content>
        <Header>
          <Logo source={{ uri: item.provider.avatar.url}} />
          <BoxRight>
            <BoxInfo>
              <InfoProvider>
                <ProviderName>{item.provider.name}</ProviderName>
                <ProviderSector>{item.provider.category.name}</ProviderSector>
              </InfoProvider>

              <InfoOrder>
                <BlockLabel>
                  <Label>Pedido:</Label>
                  <Value>{`#${item.id}`}</Value>
                </BlockLabel>

                <BlockLabel>
                  <Label>Data:</Label>
                  <Value>26/08/2020</Value>
                </BlockLabel>

                <BlockLabel>
                  <Label>Status:</Label>
                  <Value>Saiu para entrega</Value>
                </BlockLabel>
              </InfoOrder>
            </BoxInfo>
          </BoxRight>
          {!details.view && (
            <MoreStatusButton onPress={handleDetailstrue}>
              <MaterialIcons name="keyboard-arrow-down" size={25} color="#ccc" />
            </MoreStatusButton>
          )}
        </Header>

        {details.view && (
          <>
            <Body>
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

              <BlockOrder>
                <BoxOrder>
                  <BlockLabel>
                    <Label>Aceito às:</Label>
                    <Value>20:06 hs</Value>
                  </BlockLabel>

                  <BlockLabel>
                    <Label>Saiu para entrega às:</Label>
                    <Value>20:32 hs</Value>
                  </BlockLabel>
                </BoxOrder>

                <BoxOrder>
                  <BlockLabel>
                    <Label>Produção às:</Label>
                    <Value>20:18 hs</Value>
                  </BlockLabel>

                  <BlockLabel>
                    <Label>Entregue às:</Label>
                    <Value>20:52 hs</Value>
                  </BlockLabel>
                </BoxOrder>
              </BlockOrder>
            </Body>

            <Footer>
              <DetailsButton>
                <TextDetailsButton>+ Detalhes</TextDetailsButton>
              </DetailsButton>

              <LessStatusButton onPress={handleDetailsfalse}>
                <MaterialIcons name="keyboard-arrow-up" size={25} color="#ccc" />
              </LessStatusButton>
            </Footer>
          </>
        )}
      </Content>
    </Container>
  );
}

export default ListDeliveries;