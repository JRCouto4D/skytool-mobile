import React from 'react';
import { Text } from 'react-native';

import Background from '../../components/Background';
import Address from '../../components/Address';

import foto from '../../../assets/foto.jpg';

import {
  Container,
  Title,
  Block,
  BoxAvatar,
  Avatar,
  BoxUser,
  BoxData,
  BoxName,
  Label,
  Value,
  BoxEmail,
  BoxContact,
  BoxPhone,
  Phone,
  Line,
  BoxAddress,
  Content,
  ListAddress,
  BoxButton,
  Button,
  LogoutButton,
} from './styles';

const Profile = () => {
  const address = [1, 2];

  return (
    <Background>
      <Container>
        <Title>MINHA CONTA</Title>

        <Content>
          <Block>
            <BoxUser>
              <BoxData>
                <BoxName>
                  <Label>NAME:</Label>
                  <Value>Jefferson Rocha Couto</Value>
                </BoxName>

                <BoxEmail>
                  <Label>EMAIL:</Label>
                  <Value>jeffynho32@gmail.com</Value>
                </BoxEmail>
              </BoxData>

              <BoxContact>
                <Label>TELEFONE:</Label>
                <BoxPhone>
                  <Phone>(77) 98120-2019</Phone>
                  <Phone>(77) 98131-2021</Phone>
                </BoxPhone>
              </BoxContact>
            </BoxUser>

            <Line />

            <BoxAddress>
              <ListAddress
                data={address}
                key={(item) => String(item)}
                renderItem={({ item }) => (
                  <Address />
                )}
              />
            </BoxAddress>
          </Block>
        

        <BoxAvatar>
          <Avatar source={foto} />
        </BoxAvatar>

        <BoxButton>
          <Button 
            text="Historico de serviços"
            subText="Todos as suas solicitações de serviço"
            icon="history"
          />

          <Button 
            text="Dados pessoais"
            subText="Editar dados de usuário"
            icon="perm-identity"
          />

          <Button 
            text="Endereço"
            subText="Incluir ou editar endereços"
            icon="room"
          />

          <Button 
            text="Telefone"
            subText="Incluir ou editar telefones"
            icon="call"
          />
        </BoxButton>

        <LogoutButton
          text="Sair"
          subText="Acessar com outra conta"
          icon="exit-to-app"
        />
      </Content>
      </Container>
    </Background>
  );
}

export default Profile;