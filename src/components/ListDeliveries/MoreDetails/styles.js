import styled from 'styled-components/native';

export const Content = styled.View`
  padding: 5px 2px;
  flex: 1;
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Logo = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
export const BoxLeft = styled.View`
  margin-left: 20px;
  width: 100%;
`;
export const ProviderName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  max-width: 59%;
`;
export const ProviderSector = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #ccc;
`;
export const Body = styled.View`
  margin-top: 10px;
`;
export const OrderLabel = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #999;
`;
export const BlockStatus = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;
export const BoxStatus = styled.View`
  width: 25%;
  align-items: center;
  justify-content: center;
`;
export const BoxBall = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: #9F0D8B;

  justify-content: center;
  align-items: center;
`;
export const Ball = styled.View`
  width: 7px;
  height: 7px;
  border-radius: 3.5px;
  background: ${props => props.status ? '#9F0D8B' : '#FFF'};
`;
export const Status = styled.Text`
  margin-top: 3px;

  font-size: 6px;
  font-weight: bold;
  color: #9F0D8B;
`;

export const LineStatus = styled.View`
  width: 100%;
  height: 1px;
  background: #9F0D8B;

  position: absolute;
  top: 5px;
`;
export const BlockLabel = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const BoxLabel = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-width: 45%;
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

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;
export const LessDetailsButton = styled.TouchableOpacity`
  border: 1px solid #eee;
  border-radius: 4px;

  justify-content: center;
  align-items: center;
`;
export const DetailsButton = styled.TouchableOpacity`
  padding: 5px 10px;
`;
export const TextDetailsButton = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #9F0D8B;
`;
