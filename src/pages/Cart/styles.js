import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column', 
    justifyContent: 'space-between',
  }
})`
  padding-bottom: 10px;
`;

export const Content = styled.View`
  padding: 15px 0 15px 15px;
`;

export const BoxLoading = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const BoxAddress = styled.View``;

export const Label = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #999;
`;

export const ListAddress = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})``;

export const BoxItens = styled.View`
  background: #FFF;
  margin-right: 15px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
`;
export const Provider = styled.Text`
  color: #666;
  font-weight: bold;
  font-size: 14px;
  padding-bottom: 10px;
`;
export const ListItens = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const AddButtom = styled.TouchableOpacity`
  height: 45px;
  border-radius: 4px;
  background: #9F0D8B;

  margin: 20px 0;
  justify-content: center;
  align-items: center;
`;
export const TextButtom = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
`;
export const LabelBlock = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const TagLabel = styled.Text`
  color: ${props => props.color};
  font-size: ${props => `${props.size}px`};
`;

export const CompletedButtom = styled.TouchableOpacity`
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  background: #00CC33;
`;
export const TextCompletedButtom = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;
