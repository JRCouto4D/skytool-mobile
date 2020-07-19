import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  flex-direction: row;
  padding: 8px 10px;
  align-items: center;
`;

export const BlockText = styled.View`
  margin-left: 15px;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
`;
export const SubText = styled.Text`
  color: #ddd;
  font-size: 10px;
`;
