import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Category from './pages/Category';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';

export default function Routes() {
  const Stack = createStackNavigator();
  const Tabs = createBottomTabNavigator();

  const { signed } = useSelector((state) => state.auth);

  function BottomTabs() {
    return (
      <Tabs.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
          activeTintColor: '#fff',
          tabStyle: {
            backgroundColor: '#9F0D8B',
            height: 60,
            top: -11,
            padding: 5,
          },
          labelStyle: {
            fontSize: 12,
          },
        }}
      >
        <Tabs.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={30} color={color} />
            )
          }}
        />

        <Tabs.Screen
          name="Category"
          component={Category}
          options={{
            tabBarLabel: 'Categorias',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="list" size={30} color={color} />
            )
          }}
        />

        <Tabs.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="favorite" size={30} color={color} />
            )
          }}
        />

        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Minha conta',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person" size={30} color={color} />
            )
          }}
        />
      </Tabs.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {signed ? (
          <>
            <Stack.Screen
              name="Home"
              options={{
                headerShown: false,
                gestureEnabled: false,
                animationEnabled: false,
              }}
              component={BottomTabs}
            />
          </>
          ) : (
            <>
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
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}