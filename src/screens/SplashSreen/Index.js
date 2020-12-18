import React, {useEffect} from 'react';
import {Text, View, Dimensions, StatusBar, StyleSheet} from 'react-native';
import {Thumbnail} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import logoIcon from '../../assets/images/logoForSplash.png';

const SplashScreen = () => {
  const navigation = useNavigation();
  const {isLogin} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // const isLogin = true;
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
              name: 'Login',
            },
          ],
        });
      }, 3000);
    }
  }, [dispatch, isLogin]);
  return (
    <>
      <StatusBar backgroundColor="#118b0d" />
      <View style={styles.container}>
        <Thumbnail source={logoIcon} style={styles.logo} />
        <Text style={styles.mariText}>
          Mari
          <Text style={styles.blanjaText}>blanja</Text>
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#118b0d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  mariText: {
    color: '#fa591c',
    fontSize: 32,
    fontWeight: 'bold',
  },
  blanjaText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
