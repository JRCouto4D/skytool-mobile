import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          options={{
            headerShown: false,
            gestureEnabled: false,
            animationEnabled: false,
          }}
          component={SignIn}
        />
        <Stack.Screen
          name="SignUp"
          options={{
            headerShown: false,
            gestureEnabled: false,
            animationEnabled: false,
          }}
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}