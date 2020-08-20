import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column', 
    justifyContent: 'space-between',
  }
})``;

export const Content = styled.View`
  padding: 0 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;
export const LabelTotal = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #EEE;
`; 
export const Total = styled.Text`
  font-size: 20px;
  color: #EEE;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 10px;
`;

export const BorderSelected = styled.View`
  padding: 15px;
  border: 1px solid;
  border-color: ${props => props.visibled ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0)'};
  border-radius: 4px;
  margin-top: 10px;
`;
export const BoxOption = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  width: 50%;
`;
export const Option = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background: #FFF;

  justify-content: center;
  align-items: center;
`;
export const Brand = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: ${props => props.visibled ? '#000' : '#FFF'};
`;
export const OptionLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  margin-left: 10px;
`;
export const Block = styled.View`
  padding: 10px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
`;
export const ChangeLabel = styled.Text`
  font-size: 12px;
  color: #FFF;
  margin-bottom: 5px;
`;
export const BoxChangeOption = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
export const BoxLeft = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;
export const ChangeTrue = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: ${props => props.visibled ? '#000' : '#FFF'};
`;
export const ResponseLabel = styled.Text`
  color: #fff;
  margin-left: 5px;
`;
export const ChangeFalse = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: ${props => props.visibled ? '#000' : '#FFF'};
`;
export const ChangeInput = styled.TextInput.attrs({
  placeholder: 'Valor da nota que pretende pagar o pedido',
  placeholderTextColor: 'rgba(255, 255, 255, 0.4)',

})`
  width: 100%;
  height: 45px;
  margin-top: 5px;
  background: rgba(255, 255, 255, 0.4);

  border-radius: 4px;
  padding: 4px 8px;
  color: rgba(255, 255, 255, 0.7);
`;

export const ImageCard = styled.Image`
  width: 100%;
  height: 45px;
`;

export const ButtonPayment = styled.TouchableOpacity`
  height: 50px;
  justify-content: center;
  align-items: center;

  background: #0099ff;
`;
export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
