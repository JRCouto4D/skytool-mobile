import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, BlockText, TextButton, SubText } from './styles';

const Button = ({ text, subText, style, icon, ...rest }) => {
  return (
    <Container style={style} {...rest}>
      <MaterialIcons name={icon} size={35} color="#fff" />
      <BlockText>
        <TextButton>{text}</TextButton>
        <SubText>{subText}</SubText>
      </BlockText>
    </Container>
  );
};

export default Button;
