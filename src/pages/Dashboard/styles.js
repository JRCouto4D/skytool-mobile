import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
`;

export const Block = styled.View`
  width: 100%;
  height: 200px;

  background: #9F0D8B;

  padding: 0 15px;
`;
export const Header = styled.View`
  margin-top: 50px;
  margin-left: -10px;
`;

export const High = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Logo = styled.Image`
  width: 100px;
  height: 62px;
`;
export const BlockLabel = styled.View`
  margin-left: 5px;
`;
export const Salutation = styled.Text`
  font-size: 14px;
  color: #fff;
`;
export const Label = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  margin-top: -5px;
`;
export const BlockSearch = styled.View`
  flex-direction: row;
  background: #fff;
  width: 100%;
  height: 46px;
  border-radius: 20px;

  align-items: center;

  padding: 0 10px;
  margin-top: 20px;

`;

export const Divider = styled.View`
  height: 30px;
  width: 2px;
  background: #ddd;
  margin: 0 10px;

`;
export const SearchInput = styled.TextInput`
  align-self: stretch;
  width: 85%;
  
`;

export const Content = styled.View``;


