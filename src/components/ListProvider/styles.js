import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background: #FFF;
  align-self: stretch;
  margin-right: 10px;
  margin-bottom: 15px;
  padding: 5px 8px;
  border-radius: 4px;

  flex-direction: row;
  justify-content: space-between;
`;

export const BoxLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 85px;
  height: 85px;
  border-radius: 42.5px;
`;

export const Info = styled.View`
  margin-left: 10px;
  width: 65%;
`;

export const Provider = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 16px;
`;

export const Sector = styled.Text`
  color: #999;
  font-size: 12px;
  margin-top: -3px;
`;

export const Evaluation = styled.View`
  margin-top: 5px;
`;

export const Note = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex-direction: row;
`;

export const Status = styled.Text`
  position: absolute;
  right: 5px;
  bottom: 5px;

  color: ${(props) => props.open ? '#00CC33' : '#f64c75'};
  font-weight: bold;
  font-size: 10px;
`;
