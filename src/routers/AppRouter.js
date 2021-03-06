import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import SplashScreen from '../screens/SplashSreen/Index';
import Login from '../screens/Login/Index';
import Regist from '../screens/Regist/Index';
import Home from '../screens/Home/Index';
import DetailProduct from '../screens/DetailProduct/Index';
import Cart from '../screens/Cart/Index';
import HeaderDetailProduct from './HeaderDetailProduct';
import HeaderCart from './HeaderCart';

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Home"
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
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Regist}
          options={{
            headerShown: false,
          }}
        />
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
