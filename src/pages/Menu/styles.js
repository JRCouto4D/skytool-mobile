import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  flex: 1;
`;

export const Header = styled.View`
  margin-top: 5px;

  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const BoxAvatar = styled.View`
  background: #9f0d8b;
  width: 110px;
  height: 110px;
  border-radius: 60px;

  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;

  border-radius: 50px;
`;

export const BoxInfo = styled.View`
  margin: 0 10px;
  width: 72%;
`;

export const Provider = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 18px;

  max-width: 99%;
`;

export const Category = styled.Text`
  color: #999;
  font-size: 12px;
  margin-top: -1px;
`;

export const Evaluation = styled.View`
  margin-top: 5px;
`;

export const Note = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  horizontal: true,
})``;

export const BoxStatus = styled.View`
  flex-direction: row;
  margin-top: 10px;

  background: #fff;
  border-radius: 4px;
  justify-content: space-between;
  width: 100%;
`;

export const BoxLeft = styled.View`
  flex-direction: row;
`;

export const Separator = styled.View`
  background: #ddd;
  width: 2px;
  height: 25px;
  margin: 0 10px;
`;

export const Status = styled.Text`
  color: #bbb;
  font-weight: bold;
`;

export const PriceDelivery = styled.Text`
  color: #bbb;
  font-weight: bold;
`;

export const Sector = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const ListProducts = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 15px;
`;
