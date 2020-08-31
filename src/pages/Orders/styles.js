import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #eee;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background: #9F0D8B;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Block = styled.View`
  margin-top: 30px;
  align-items: center;
  width: 50%;
  background: ${props => props.selected ? '#eee' : '#9F0D8B'};
`;

export const BoxButton = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const DeliveryButton = styled(RectButton)`
  padding-top: 20px;
  width: 100%;
`;
export const TextDeliveryButton = styled.Text`
  margin-left: 5px;
  color: ${props => props.selected ? '#9F0D8B' : '#eee'};
  font-size: 14px;
  font-weight: bold;
`;

export const SchedulesButton = styled(RectButton)`
  padding-top: 20px;
  width: 100%;
`;
export const TextSchedulesButton = styled.Text`
  margin-left: 5px;
  color: ${props => props.selected ? '#9F0D8B' : '#eee'};
  font-size: 14px;
  font-weight: bold;
`;

export const LineFooter = styled.View`
  width: 70%;
  height: 2px;
  margin-top: -2px;

  background: ${props => props.selected ? '#9F0D8B' : '#eee'};
  display: ${props => props.selected ? 'flex' : 'none'}
`;
