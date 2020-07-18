import styled from 'styled-components/native';

export const Container = styled.View`
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
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Info = styled.View`
  margin-left: 10px;
`;

export const Provider = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 18px;
`;

export const Sector = styled.Text`
  color: #999;
  font-size: 12px;
  margin-top: -3px;
`;

export const Evaluation = styled.View`
  margin-top: 5px;
`;

export const Note = styled.FlatList`
  flex-direction: row;
`;

export const Status = styled.Text`
  color: ${(props) => props.open ? '#00CC33' : '#f64c75'};
  font-size: 12px;
  margin-top: 80px;
  font-weight: bold;
`;
