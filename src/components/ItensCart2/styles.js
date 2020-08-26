import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-color: rgba(255, 255, 255,0.3);
`;

export const Item = styled.Text`
  max-width: 80%;
  padding: 8px 0;

  font-size: 10px;
  color: rgba(255, 255, 255,0.7);
`;

export const Price = styled.Text`
  font-size: 10px;
  color: rgba(255, 255, 255,0.7);
`;
