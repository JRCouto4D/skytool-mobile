import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import Deliveries from '../../components/Deliveries';
import Schedules from '../../components/Schedules';
import {
  Container,
  Header,
  Content,
  Block,
  DeliveryButton,
  TextDeliveryButton,
  SchedulesButton,
  TextSchedulesButton,
  LineFooter,
  BoxButton,
} from './styles';

const Orders = () => {
  const [viewDelivery, setViewDelivery] = useState(true);
  const [viewSchedules, setViewSchedules] = useState(false);

  function handleViewDelivery() {
    setViewDelivery(true);
    setViewSchedules(false);
  }

  function handleViewSchedules() {
    setViewSchedules(true);
    setViewDelivery(false);
  }

  return (
    <Container>
      <Header>
        <Block selected={viewDelivery}>
          <DeliveryButton onPress={handleViewDelivery}>
            <BoxButton>
              <MaterialIcons name="store" size={20} color={viewDelivery ? '#9F0D8B' : '#eee'} />
              <TextDeliveryButton selected={viewDelivery}>Delivery</TextDeliveryButton>
            </BoxButton>
          </DeliveryButton>
          <LineFooter selected={viewDelivery} />
        </Block>

        <Block selected={viewSchedules}>
          <SchedulesButton onPress={handleViewSchedules}>
            <BoxButton>
              <MaterialIcons name="event" size={20} color={viewSchedules ? '#9F0D8B' : '#eee'} />
              <TextSchedulesButton selected={viewSchedules}>Agendamentos</TextSchedulesButton>
            </BoxButton>
          </SchedulesButton>
          <LineFooter selected={viewSchedules} />
        </Block>
      </Header>

      <Content>
        {viewDelivery ? (
          <Deliveries />
        ) : (
          <Schedules />
        )}
      </Content>
    </Container>
  );
};

export default Orders;
