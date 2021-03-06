import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 50px;
  padding: 3px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const BackButtom = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  margin-left: 10px;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const BoxList = styled.View`
  flex-direction: row;
`;

export const BoxIcon = styled.TouchableOpacity`
  flex: 1;
  background: #fff;
  margin: 2px;
  padding: 20px;

  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
`;

export const TextIcon = styled.Text`
  font-size: 8.5px;
  font-weight: bold;
  color: #999999;

  margin-top: 10px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 3,
})``;
