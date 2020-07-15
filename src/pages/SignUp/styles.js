import styled from 'styled-components/native';
import Input from '../../components/Input';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 300px;
  height: 240px;
`;
export const InputBlock = styled.View`
  width: 100%;
  margin-top: 10px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 12px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: 46px;
  background: #0099FF;
  border-radius: 4px;

  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
export const LinkSignUp = styled.TouchableOpacity``;
export const TextLink = styled.Text`
  font-size: 14px;
  color: #fff;

  margin-top: 25px;
`;

