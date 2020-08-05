import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  margin-bottom: 15px;
`;

export const BoxLeft = styled.View`
  justify-content: center;
  width: 72%;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #666;
`;

export const Description = styled.Text`
  font-size: 9px;
  color: #999;
`;

export const Price = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

export const Image = styled.Image`
  width: 90px;
  height: 90px;
`;
