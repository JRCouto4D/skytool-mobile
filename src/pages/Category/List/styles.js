import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  margin: 10px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoxLeft = styled.View`
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const Result = styled.Text`
  font-size: 12px;
  color: #999;
`;

export const FilterButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;

  background: #0099FF;
  border-radius: 4px;
  padding: 5px 15px;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  color: #FFF;
  margin-left: 10px;
`;

export const ProviderList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-left: 10px;
  margin-top: 10px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 5%;
`;

export const Message = styled.Text`
  font-size: 14px;
  color: #999;

  text-align: center;
`;
