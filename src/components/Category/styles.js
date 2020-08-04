import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const BoxList = styled.View`
  flex-direction: row;
`;

export const BoxIcon = styled.TouchableOpacity`
  flex: 1;
  background: #fff;
  margin: 2px;
  padding: 10px;

  justify-content: center;
  align-items: center;
  text-align: center;
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
