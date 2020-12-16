import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Home from '../screens/Home/Index';
import DetailProduct from '../screens/DetailProduct/Index';
import Cart from '../screens/Cart/Index';
import {Header} from 'native-base';
import HeaderDetailProduct from './HeaderDetailProduct';
import HeaderCart from './HeaderCart';

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTintColor: '#646a72',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailProduct"
          component={DetailProduct}
          options={{
            gestureDirection: 'horizontal',
            header: () => {
              return <HeaderDetailProduct />;
            },
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            gestureDirection: 'horizontal',
            header: () => {
              return <HeaderCart />;
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
