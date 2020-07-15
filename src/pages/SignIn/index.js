import React from 'react';
import { View, Text } from 'react-native';

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

const SignIn = ({ navigation }) => {
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
            placeholder="Digite seu e-mail"
            returnKeyType="next"
          />

          <FormInput
            secureTextEntry
            placeholder="Sua senha secreta"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
        </InputBlock>

        <SubmitButton onPress={() => {}}>
          <TextButton>ACESSAR</TextButton>
        </SubmitButton>

        <LinkSignUp onPress={() => navigation.navigate('SignUp')}>
          <TextLink>Criar conta no Skytool</TextLink>
        </LinkSignUp>
      </Container>
    </Backgrond>
  );
}

export default SignIn;