import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  min-width: 40%;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const BoxAdress = styled(RectButton)`
  background: ${props => props.enabledAd ? 'rgba(159, 13, 139, 0.7)' : '#FFF'};
  padding: 10px;
  border-radius: 4px;

  margin: 10px 15px 0 0;
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Description = styled.Text`
  color: ${props => props.enabledAd ? '#FFF' : '#000'};
  font-weight: bold;
  font-size: 12px;

  margin-left: 5px;
  margin-bottom: 5px;
`;
export const BoxLabel = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;
export const Label = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: ${props => props.enabledAd ? '#FFF' : '#333'};
`;
export const Value = styled.Text`
  font-size: 10px;
  max-width: 80%;
  color: ${props => props.enabledAd ? '#FFF' : '#333'};

  margin-left: 5px;
`;
export const Footer = styled.View``;
