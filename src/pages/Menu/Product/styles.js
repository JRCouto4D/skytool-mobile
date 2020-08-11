import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column', 
    justifyContent: 'space-between',
  }
})`
  padding: 10px;
`;

export const Content = styled.View`
  width: 100%;
`;

export const Header = styled.View`
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 0 15px 30px 15px;

  margin-top: 50px;
`;

export const BoxTopHeader = styled.View`
  margin-top: 85px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoxLeft = styled.View`
  max-width: 50%;
`;

export const BoxProduct = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Sector = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
`;

export const DivTop = styled.View`
  width: 2px;
  height: 15px;
  background: #FFF;
  margin: 0 15px;
`;

export const NameProduct = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
`;

export const Description = styled.Text`
  font-size: 8px;
  color: #999;
`;

export const PriceProduct = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;

  margin-top: 30px;
`;

export const BoxFooterHeader = styled.View`
  margin: 20px auto 0;
  flex-direction: row;
  align-items: center;
`;

export const ProviderName = styled.Text`
  font-size: 8px;
  font-weight: bold;
  color: #FFF;

  margin-left: 8px;
`;

export const DivFooter = styled.View`
  width: 1px;
  height: 10px;
  background: #FFF;
  margin: 0 8px;
`;

export const DeliveryTime = styled.Text`
  font-size: 8px;
  font-weight: bold;
  color: #FFF;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.4);

  margin: 15px 0;
`;

export const Comments = styled.TextInput.attrs({
  placeholder: 'Incluir alguma observação?',
  placeholderTextColor: '#FFF',
  multiline: true,
  textAlignVertical: 'top',
})`
  width: 100%;
  height: 100px;
  border-radius: 8px;
  padding: 10px;

  background: rgba(255, 255, 255, 0.4);
  color: #fff;
`;

export const BoxImage = styled.View`
  position: absolute;
  top: 0;

  width: 120px;
  height: 120px;
  border-radius: 60px;
  background: #9F0D8B;

  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Footer = styled.View``;

export const Total = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #FFF;

  margin: 0 0 10px auto;
`;

export const BoxFooter = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BoxAmount = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 0;

  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 4px;
`;

export const RemoveButtom = styled.TouchableOpacity`
  padding: 5px 10px;
`;

export const Amount = styled.Text`
  border-left-width: 2px;
  border-right-width: 2px;
  border-color: rgba(255, 255, 255, 0.4);
  padding: 0 12px;

  font-size: 14px;
  font-weight: bold;
  color: #FFF;

`;

export const AddBottom = styled.TouchableOpacity`
  padding: 5px 12px;
`;

export const FinishButtom = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  padding: 12px 0;
  border-radius: 4px;
  background: #0099ff;
`;

export const FinishText = styled.Text`
  font-size: 14px;
  color: #FFF;
  font-weight: bold;

  margin-right: 10px;
`;
