import React from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native';
import gears from '../../../assets/gears_2.json';

const Loading = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Lottie
        source={gears}
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