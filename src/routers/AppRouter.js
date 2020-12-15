import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Home from '../screens/Home/Index';
import DetailProduct from '../screens/DetailProduct/Index';
import {Header} from 'native-base';
import HeaderDetailProduct from './HeaderDetailProduct';

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#CBE15A',
          },
          headerTintColor: 'white',
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
            title: 'Detail Product',
            gestureDirection: 'horizontal',
            header: ({scene, previous, navigation}) => {
              // const { options } = scene.descriptor;
              // const title =
              //   options.headerTitle !== undefined
              //     ? options.headerTitle
              //     : options.title !== undefined
              //     ? options.title
              //     : scene.route.name;

              return <HeaderDetailProduct />;
            },
          }}
        />
        {/* <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'Keranjang',
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
