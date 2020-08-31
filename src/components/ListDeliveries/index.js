import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { format, parseISO } from 'date-fns';

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
  const [accept, setAccept] = useState(true);
  const [production, setProduction] = useState(false);
  const [delivered, setDelivered] = useState(false);
  const [complete, setComplete] = useState(false);
  const [canceled, setCanceled] = useState(false);
  const [status, setStatus] = useState('');

  function formatDate(date) {
    const formattedDate = format(parseISO(date), 'dd/MM/yyyy');
    return formattedDate;
  }

  function formatTime(time) {
    const formattedTime = format(parseISO(time), "HH:mm' hs'");
    return formattedTime;
  }

  function handleStatus() {
    if (item.canceled_at !== null) {
      setCanceled(true);
      setStatus('Cancelada');
      return;
    }

    if (item.finished_at !== null) {
      setComplete(true);
      setDelivered(true);
      setProduction(true);
      setStatus('Entregue');
      return;
    }

    if (item.delivered_at !== null && item.finished_at === null) {
      setDelivered(true);
      setProduction(true);
      setStatus('Saiu para entrega');
      return;
    }

    if (item.production_at !== null 
      && item.delivered_at === null 
      && item.finished_at === null) {
      setProduction(true);
      setStatus('Está em produção');
      return;
    }
    setCanceled(false);
    setComplete(false);
    setDelivered(false);
    setProduction(false);
    setStatus('Aceita');
  }

  useEffect(() => {
    handleStatus();
  }, [item ,status]);

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
                  <Value>{formatDate(item.completed_at)}</Value>
                </BlockLabel>

                <BlockLabel>
                  <Label>Status:</Label>
                  <Value>{status}</Value>
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
                    <Ball status={accept} />
                  </BoxBall>
                  <Status>Aceito</Status>
                </BoxStatus>

                <BoxStatus>
                  <BoxBall>
                    <Ball status={production} />
                  </BoxBall>
                  <Status>Em produção</Status>
                </BoxStatus>

                <BoxStatus>
                  <BoxBall>
                    <Ball status={delivered} />
                  </BoxBall>
                  <Status>Saiu para entrega</Status>
                </BoxStatus>

                <BoxStatus>
                  <BoxBall>
                    <Ball status={complete} />
                  </BoxBall>
                  <Status>Entregue</Status>
                </BoxStatus>
              </BlockStatus>

              <BlockOrder>
                <BoxOrder>
                  <BlockLabel>
                    <Label>Aceito às:</Label>
                    <Value>{formatTime(item.completed_at)}</Value>
                  </BlockLabel>

                  <BlockLabel>
                    <Label>Saiu para entrega às:</Label>
                    <Value>{item.delivered_at === null 
                    ? '---' : formatTime(item.delivered_at)}</Value>
                  </BlockLabel>
                </BoxOrder>

                <BoxOrder>
                  <BlockLabel>
                    <Label>Produção às:</Label>
                    <Value>{item.production_at === null 
                    ? '---' : formatTime(item.production_at)}</Value>
                  </BlockLabel>

                  <BlockLabel>
                    <Label>Entregue às:</Label>
                    <Value>{item.finished_at === null 
                    ? '---' : formatTime(item.finished_at)}</Value>
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