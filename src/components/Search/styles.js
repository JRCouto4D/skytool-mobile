import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const Label = styled.Text`
  font-size: 14px;
  color: #999;

  margin: 10px 0 10px 10px;
`;

export const List =styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-left: 10px;
`;

export const Failure = styled.Text`
  margin-left: 10px;
  margin-top: 10px;

  font-size: 25px;
  color: #333;
  font-weight: bold;
`;
