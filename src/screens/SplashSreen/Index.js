import React, {useEffect} from 'react';
import {Text, View, Dimensions, StatusBar} from 'react-native';
import {Thumbnail} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import logoIcon from '../../assets/images/logoForSplash.png';

const SplashScreen = () => {
  const navigation = useNavigation();
  // const {isLogin} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const isLogin = true;
  useEffect(() => {
    if (isLogin) {
      setTimeout(() => {
        navigation.navigate('Home');
      }, 3000);
    } else if (!isLogin) {
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Home',
            },
          ],
        });
      }, 3000);
    }
  }, [dispatch, isLogin]);
  return (
    <>
      <StatusBar backgroundColor="#118b0d" />
      <View
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          backgroundColor: '#118b0d',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Thumbnail source={logoIcon} style={{width: 100, height: 100}} />
        <Text style={{color: '#fa591c', fontSize: 32, fontWeight: 'bold'}}>
          Mari
          <Text style={{color: '#FFFFFF', fontSize: 32, fontWeight: 'bold'}}>
            blanja
          </Text>
        </Text>
      </View>
    </>
  );
};

export default SplashScreen;
