import styled from 'styled-components/native';

export const Container = styled.View``;

export const Content = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;
export const BoxLeft = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
export const BoxInfo = styled.View`
  margin-left: 10px;
  flex: 1;
`;
export const InfoHeader = styled.View`
  margin-bottom: 5px;
  max-width: 90%;
`;
export const ProviderName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;
export const ProviderSector = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: #ccc;
`;
export const BlockLabel = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Label = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: #333;
  margin-right: 5px;
`;
export const Value = styled.Text`
  font-size: 10px;
  color: #333;
`;

export const DetailsButton = styled.TouchableOpacity`
  border: 1px solid #eee;
  border-radius: 4px;

  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
`;
