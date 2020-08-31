import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px 15px;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const BoxLeft = styled.View``;
export const Label = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;
export const AmountResult = styled.Text`
  color: #999;
  font-size: 10px;
`;
export const FilterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;

  background: #0099ff;
  border-radius: 4px;
`;
export const FilterButtonText = styled.Text`
  margin-left: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;
