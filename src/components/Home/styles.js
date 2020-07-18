import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #eeeeee;
`;

export const Label = styled.Text`
  margin: 10px;
  color: #333;
  font-size: 12px;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    marginLeft: 10,
  },
})``;
