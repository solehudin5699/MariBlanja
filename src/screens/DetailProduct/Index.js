import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import DetailProduct from '../../components/DetailProduct/Index';
import {useNavigation} from '@react-navigation/native';

export default function Index() {
  const navigation = useNavigation();
  const backAction = () => {
    navigation.goBack();
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
  return (
    <>
      <DetailProduct />
    </>
  );
}
