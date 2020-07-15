import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';  

export default styled(LinearGradient).attrs({
  colors: ['#9F0D8B', '#4A0155'],
  start: [0.2, 0.1],
})`
  flex: 1;
`;