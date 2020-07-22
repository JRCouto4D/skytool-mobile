import styled from 'styled-components/native';

export const Container = styled.View`
`;

export const BoxList = styled.View`
flex-direction: row;
`;

export const BoxIcon = styled.TouchableOpacity`
  flex: 1;
  background: #FFF;
  margin: 2px;
  padding: 15px;

  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
`;

export const TextIcon = styled.Text`
  font-size: 8px;
  font-weight: bold;
  color: #999999;

  margin-top: 10px;
`;
