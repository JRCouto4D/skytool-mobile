import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native';

import Backgrond from '../../components/Background';

import logo from '../../../assets/LOGO.png';

import { signInRequest } from '../../store/module/auth/actions';

import {
  Container,
  Logo,
  InputBlock,
  FormInput,
  SubmitButton,
  TextButton,
  LinkSignUp,
  TextLink,
} from './styles';

const SignIn = ({ navigation }) => {
  const dispath = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading } = useSelector((state) => state.auth);
  const refPassword = useRef();

  function handleSubmit() {
    dispath(signInRequest(email, password));
  }

  return (
    <Backgrond>
      <Container>
        <Logo source={logo} />
        <InputBlock>
          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => refPassword.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            secureTextEntry
            placeholder="Sua senha secreta"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            ref={refPassword}
            value={password}
            onChangeText={setPassword}
          />
        </InputBlock>

        <SubmitButton onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <TextButton>ACESSAR</TextButton>
          )}
        </SubmitButton>

        <LinkSignUp onPress={() => navigation.navigate('SignUp')}>
          <TextLink>Criar conta no Skytool</TextLink>
        </LinkSignUp>
      </Container>
    </Backgrond>
  );
};

export default SignIn;
