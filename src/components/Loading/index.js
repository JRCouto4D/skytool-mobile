import React from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native';

const Loading = ({ animation }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Lottie
        source={animation}
        autoPlay
        autoSize
        loop
        resizeMode="contain"
        style={{
          width: 150,
          height: 150,
        }}
      />
    </View>
  );
};

export default Loading;
