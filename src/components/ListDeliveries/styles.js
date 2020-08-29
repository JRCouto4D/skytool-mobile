import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Content = styled.View`
  width: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BoxRight = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 75%;
`;

export const Logo = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const BoxInfo = styled.View`
  margin-left: 8px;
`;

export const InfoProvider = styled.View``;

export const ProviderName = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #333;
`;

export const ProviderSector = styled.Text`
  font-size: 6px;
  font-weight: bold;
  color: #ccc;
  margin-top: -1px;
`;

export const InfoOrder = styled.View`
  margin-top: 3px;
`;

export const BlockLabel = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 8px;
  font-weight: bold;
  color: #333;
  margin-right: 5px;
`;

export const Value = styled.Text`
  font-size: 8px;
  color: #333;
`;

export const MoreStatusButton = styled.TouchableOpacity`
  border: 1px solid #eee;
  padding: 2px;
  border-radius: 4px;

  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Body = styled.View`
  margin-top: 15px;
`;
export const BlockStatus = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0 10px;
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

export const BlockOrder = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const BoxOrder = styled.View`
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;
export const DetailsButton = styled.TouchableOpacity`
  padding: 5px 10px 5px 0;
`;
export const TextDetailsButton = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: #9F0D8B;
`;

export const LessStatusButton = styled.TouchableOpacity`
  border: 1px solid #eee;
  padding: 2px;
  border-radius: 4px;
`;
