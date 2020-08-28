import React from 'react';

import MoreDetails from './MoreDetails';
import LessDetails from './LessDetails';

import { styles } from '../../util/globalStyles';
import { Container } from './styles';


const ListDeliveries = () => {
  return (
    <Container style={styles.containerStyle}>
      <MoreDetails />
    </Container>
  );
}

export default ListDeliveries;