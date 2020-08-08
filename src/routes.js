/* eslint-disable react/display-name */
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ListCategory from './pages/Category';
import ListProvider from './pages/Category/List';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import Menu from './pages/Menu';

export default function Routes() {
  const Stack = createStackNavigator();
  const Tabs = createBottomTabNavigator();

  const { signed } = useSelector((state) => state.auth);

  function Category() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#FFF',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#9F0D8B',
          },
          headerLeftContainerStyle: {
            marginLeft: 10,
          },
          headerRightContainerStyle: {
            marginRight: 15,
          }
        }}>
        <Stack.Screen
          name="LisCategory"
          component={ListCategory}
          options={{
            headerShown: false,
            gestureEnabled: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="LisProvider"
          component={ListProvider}
          options={({ route, navigation }) => ({
            headerTitleAlign: 'center',
            title: route.params.category.name,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="chevron-left" size={30} color="#fff" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Menu"
          component={Menu}
          options={({ route, navigation }) => ({
            headerTitleAlign: 'center',
            title: `${
              route.params.provider.name.length > 18
              ? `${route.params.provider.name.substr(0, 18)}...`
              : route.params.provider.name
            }`,
            headerTitleStyle: {
              fontSize: 16,
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="chevron-left" size={30} color="#fff" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <TouchableOpacity onPress={() => {}}>
                  <MaterialIcons name="search" size={25} color="#FFF" />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginLeft: 6 }}>
                  <MaterialIcons name="shopping-basket" size={25} color="#FFF" />
                </TouchableOpacity>

                <View style={{
                  width: 15,
                  height: 15,
                  borderRadius: 7.5,
                  backgroundColor: '#ff892e',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  top: -8,
                  right: -5,
                }}>
                  <Text style={{
                    fontSize: 8,
                    color: '#FFF',
                    fontWeight: 'bold',
                  }}>
                    1
                  </Text>
                </View>
              </View>
            )
          })}
        />
      </Stack.Navigator>
    );
  }

  function BottomTabs() {
    return (
      <Tabs.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
          activeTintColor: '#fff',
          tabStyle: {
            backgroundColor: '#9F0D8B',
            padding: 5,
          },
          labelStyle: {
            fontSize: 12,
          },
        }}>
        <Tabs.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={25} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="Category"
          component={Category}
          options={{
            tabBarLabel: 'Categorias',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="list" size={25} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="favorite" size={25} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Minha conta',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person" size={25} color={color} />
            ),
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
  );
}
