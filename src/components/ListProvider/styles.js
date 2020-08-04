import styled from 'styled-components/native';

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
  margin-top: -1px;
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

  color: ${(props) => (props.open ? '#00CC33' : '#f64c75')};
  font-weight: bold;
  font-size: 10px;
`;
