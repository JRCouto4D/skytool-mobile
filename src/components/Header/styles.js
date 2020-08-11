import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 40px 15px 10px;

  background: #9F0D8B;
`;

export const BackButton = styled.TouchableOpacity``;
export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #FFF;
`;

export const BoxButons = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const SeachButton = styled.TouchableOpacity`
  padding: 3px;
`;
export const BagButton = styled.TouchableOpacity`
  padding: 3px;
  margin-left: 10px;
`;
export const BoxBagAmount = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background: #ff892e;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -2px;
  top: -5px;
`;
export const BagAmount = styled.Text`
  font-size: 8px;
  font-weight: bold;
  color: #FFF;
`;
