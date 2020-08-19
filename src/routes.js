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
import Header from './components/Header';
import ListProvider from './pages/Category/List';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import Menu from './pages/Menu';
import Product from './pages/Menu/Product';
import Cart from './pages/Cart';

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
                <MaterialIcons name="arrow-back" size={30} color="#fff" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Menu"
          component={Menu}
          options={({ route, navigation }) => ({
            header: () => <Header route={route} navigation={navigation} />,
          })}
        />

        <Stack.Screen
          name="Product"
          component={Product}
          options={({ route, navigation }) => ({
            headerTitleAlign: 'center',
            title: route.params.product.name,
            headerTitleStyle: {
              fontSize: 16,
            },
            gestureEnabled: false,
            animationEnabled: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back" size={30} color="#fff" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={({ route, navigation }) => ({
            headerTitleAlign: 'center',
            title: 'Carrinho',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back" size={30} color="#fff" />
              </TouchableOpacity>
            ),
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
