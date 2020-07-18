import React from 'react';
import { Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import logo from '../../../assets/LOGO.png';
import Home from '../../components/Home';

import {
  Container,
  Block,
  Content,
  Header,
  Logo,
  BlockLabel,
  Salutation,
  Label,
  BlockSearch,
  SearchInput,
  High,
  Divider,
} from './styles';

const Dashboard = () => {
  return (
    <Container>
      <Block>
      <Header>
        <High>
          <Logo source={logo} />
          <BlockLabel>
            <Salutation>Olá, Jefferson Couto</Salutation>
            <Label>Bem-vindo!</Label>
          </BlockLabel>
        </High>
      </Header>

      <BlockSearch>
        <MaterialIcons name="search" size={32} color="#ccc" />
        <Divider />
        <SearchInput
          placeholder="O que você está procurando"
          autoCapitalize="none"
          returnKeyType="send"
          onSubmitEditing={() => {}}
        />
      </BlockSearch>
      </Block>
      
      <Content>
        <Home />
      </Content>
    </Container>
  );
}

export default Dashboard;