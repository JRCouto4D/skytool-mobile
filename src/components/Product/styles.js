import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
`;

export const BoxLeft = styled.View`
  justify-content: center;
  width: 72%;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #9F0D8B;
`;

export const Description = styled.Text`
  font-size: 9px;
  color: #999;
`;

export const Price = styled.Text`
  font-size: 18px;
  color: #00CC33;
  font-weight: bold;
  margin-top: 5px;
`;

export const Image = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 45px;
`;
