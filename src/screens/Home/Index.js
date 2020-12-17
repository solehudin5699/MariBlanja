import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import Home from '../../components/Home/Index';
export default function Index() {
  const backAction = () => {
    BackHandler.exitApp();
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
  return (
    <>
      <Home />
    </>
  );
}
