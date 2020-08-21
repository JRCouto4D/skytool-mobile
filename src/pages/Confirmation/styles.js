import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column', 
    justifyContent: 'space-between',
  }
})``;

export const Content = styled.View`
  margin: 65px 15px;
  background: rgba(0, 0, 0, 0.4);
  padding: 40px 10px 15px;
  border-radius: 8px;
`;

export const Label = styled.Text`
  color: ${props => props.color};
  font-size: ${props => `${props.size}px`};
  font-weight: ${props => `${props.weigth}`};
`;

export const SaleId = styled.Text`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
`;

export const ListItens = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 8px;
`;

export const BoxInfoSale = styled.View`
  margin: 25px 0 15px;
`;

export const Block = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const BlockFooter = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BoxLeft = styled.View`
  width: 72%;
`;

export const BoxLeftHeader = styled.View`
  margin: 5px 0 10px;
`;

export const BoxRigth = styled.View`
  width: 28%;
`;

export const BoxImage = styled.View`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background: #9F0D8B;
  justify-content: center;
  align-items: center;
  align-self: center;
  top: 10px;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Buttom = styled.View`
  justify-content: center;
  align-items: center;

  height: 50px;
  background: #0099ff;
`;

export const ButtomText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;

