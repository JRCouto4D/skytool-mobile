import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-top-width: 1px;
  border-color: #eee;
`;

export const Item = styled.Text`
  font-size: 11px;
  color: #999;
  max-width: 50%;
`;

export const BoxRight = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Price = styled.Text`
  font-size: 12px;
  color: #999;
`;
export const BoxIcons = styled.View`
  margin-left: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 50px;
`;

export const Buttom = styled.TouchableOpacity``;
