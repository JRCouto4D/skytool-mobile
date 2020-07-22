import styled from 'styled-components/native';
import BT from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;

export const Content = styled.ScrollView``;
export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;

  margin-left: 10px;
`;
export const Block = styled.View`
  background: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  width: 95%;
  padding: 0 15px 15px;
  margin: 60px 10px 0;
`;
export const BoxAvatar = styled.View`
  position: absolute;
  background: #9F0D8B;
  width: 120px;
  height: 120px;
  border-radius: 60px;

  align-self: center;
  align-items: center;
  justify-content: center;
`;
export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
export const BoxUser = styled.View`
  margin-top: 60px;
  flex-direction: row;
`;
export const BoxData = styled.View`
  flex: 1;
`;
export const BoxName = styled.View`
  margin-bottom: 15px;
`;
export const Label = styled.Text`
  font-size: 10px;
  color: #eee;
  font-weight: bold;
`;
export const Value = styled.Text`
  color: #ddd;
  font-size: 10px;
  margin-top: 4px;
`;
export const BoxEmail = styled.View``;
export const BoxContact = styled.View``;
export const BoxPhone = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
  flex: 1;
`;
export const Phone = styled.Text`
  font-size: 10px;
  color: #ddd;
  margin-top: 5px;
`;
export const Line = styled.View`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.4);
  margin: 20px 0;
`;
export const BoxAddress = styled.View``;

export const ListAddress = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})``;

export const BoxButton = styled.View`
  margin-top: 20px;
`;

export const Button = styled(BT)`
  background: #0099FF;
  margin-bottom: 5px;
`;

export const LogoutButton = styled(BT)`
  margin: 25px 0;
  background: #f64c75;
`;
