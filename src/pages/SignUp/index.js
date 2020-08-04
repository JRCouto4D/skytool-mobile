import React from 'react';

import Backgrond from '../../components/Background';

import logo from '../../../assets/LOGO.png';

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

const SignUp = ({ navigation }) => {
  function handleSubmit() {}

  return (
    <Backgrond>
      <Container>
        <Logo source={logo} />
        <InputBlock>
          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nome completo"
            returnKeyType="next"
          />

          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
          />

          <FormInput
            secureTextEntry
            placeholder="Sua senha secreta"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <FormInput
            secureTextEntry
            placeholder="Confirmar senha secreta"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
        </InputBlock>

        <SubmitButton onPress={() => {}}>
          <TextButton>CRIAR CONTA</TextButton>
        </SubmitButton>

        <LinkSignUp onPress={() => navigation.navigate('SignIn')}>
          <TextLink>Já tenho conta no Skytool</TextLink>
        </LinkSignUp>
      </Container>
    </Backgrond>
  );
};

export default SignUp;
