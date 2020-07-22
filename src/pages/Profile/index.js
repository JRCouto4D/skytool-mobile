import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'react-native';

import Background from '../../components/Background';
import Address from '../../components/Address';

import { signOut } from '../../store/module/auth/actions';

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
  const { profile } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

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
                  <Value>{profile.name}</Value>
                </BoxName>

                <BoxEmail>
                  <Label>EMAIL:</Label>
                  <Value>{profile.email}</Value>
                </BoxEmail>
              </BoxData>

              <BoxContact>
                <Label>TELEFONE:</Label>
                <BoxPhone
                  data={profile.phones}
                  keyExtractor={(item) => String(item.id)}
                  renderItem={({ item }) => (
                    <Phone>{item.number}</Phone>
                  )}
                />
              </BoxContact>
            </BoxUser>

            <Line />

            <BoxAddress>
              <ListAddress
                data={profile.address}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                  <Address address={item} />
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
          onPress={handleLogout}
        />
      </Content>
      </Container>
    </Background>
  );
}

export default Profile;