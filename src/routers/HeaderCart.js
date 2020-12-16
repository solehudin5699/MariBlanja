import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  FlatList,
  Pressable,
} from 'react-native';
import {Container, Header, Content, Footer} from 'native-base';
import {Icon, SearchBar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export default function HeaderCart(props) {
  const navigation = useNavigation();
  return (
    <Header
      androidStatusBarColor="#118b0d"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        shadowColor: 'transparent',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        // elevation: 5,
        // height: 100,
        flexDirection: 'row',
        width: '100%',
        padding: 0,
        // width: Dimensions.get('window').width,
        // borderBottomRightRadius: 15,
        // borderBottomLeftRadius: 15,
      }}>
      <Pressable style={{flex: 0.1, marginLeft: 0}}>
        <Icon
          name="arrow-left"
          size={23}
          color="#646a72"
          type="feather"
          onPress={() => navigation.goBack()}
        />
      </Pressable>
      <View style={{flex: 0.9}}>
        <Text
          style={{
            color: '#646a72',
            fontWeight: 'bold',
            fontStyle: 'normal',
            fontSize: 18.5,
            marginLeft: 25,
          }}>
          Keranjang
        </Text>
      </View>
    </Header>
  );
}
