import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Cart from '../../components/Cart/Index';

export default function Index() {
  const navigation = useNavigation();
  const backAction = () => {
    navigation.navigate('Home');
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
  return (
    <>
      <Cart />
    </>
  );
}
