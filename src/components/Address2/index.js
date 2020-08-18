import React from 'react';
import { ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import { 
  Container,
  Content,
  BoxAdress,
  Header,
  Description,
  BoxLabel,
  Label,
  Value,
  Footer,
} from './styles';

const Address2 = ({ address, handleActiveAddress }) => {
  return (
    <Container>
      <BoxAdress enabledAd={address.able} onPress={handleActiveAddress}>
        <Header>
          <MaterialIcons 
            name="location-on" 
            size={20} 
            color={address.able ? '#FFF' : '#333'} 
          />
          <Description enabledAd={address.able}>Endereço 1</Description>
        </Header>

        <BoxLabel>
          <Label enabledAd={address.able}>Rua:</Label>
          <Value 
            enabledAd={address.able}
          >
            {`${address.street} - ${address.number}`}
          </Value>
        </BoxLabel>

        <BoxLabel>
          <Label enabledAd={address.able}>Bairro:</Label>
          <Value enabledAd={address.able}>{address.neighborhood}</Value>
        </BoxLabel>

        <Footer>
          <BoxLabel>
            <Label enabledAd={address.able}>Cidade:</Label>
            <Value enabledAd={address.able}>{address.city}</Value>
          </BoxLabel>

          <BoxLabel>
            <Label enabledAd={address.able}>Estado:</Label>
            <Value enabledAd={address.able}>{address.state}</Value>
          </BoxLabel>

          <BoxLabel>
            <Label enabledAd={address.able}>Cep:</Label>
            <Value enabledAd={address.able}>{address.zip_code}</Value>
          </BoxLabel>
        </Footer>
      </BoxAdress>
    </Container>
  );
}

export default Address2;