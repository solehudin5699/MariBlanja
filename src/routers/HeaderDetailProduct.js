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
import {useSelector} from 'react-redux';
import {Icon, SearchBar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export default function HeaderDetailProduct(props) {
  const navigation = useNavigation();
  const {cart} = useSelector((state) => state.cart);
  return (
    <Header
      androidStatusBarColor="#118b0d"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        // shadowColor: 'transparent',
        // shadowOffset: {
        //   width: 0,
        //   height: 0,
        // },
        // shadowOpacity: 0,
        // shadowRadius: 0,
        // elevation: 5,
        // height: 100,
        flexDirection: 'row',
        width: '100%',
        padding: 0,
      }}>
      <Pressable style={{flex: 0.11, marginLeft: 0}}>
        <Icon
          name="arrow-left"
          size={23}
          color="#646a72"
          type="feather"
          onPress={() => navigation.goBack()}
        />
      </Pressable>
      <View style={{flex: 0.67}}>
        <Text
          style={{
            color: '#646a72',
            fontWeight: 'bold',
            fontStyle: 'normal',
            fontSize: 18.5,
            marginLeft: 25,
          }}>
          Detail Produk
        </Text>
      </View>
      <Pressable
        style={{flex: 0.11}}
        onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={18} color="#646a72" type="feather" />
        <View
          style={{
            position: 'absolute',
            height: 18,
            width: 18,
            borderRadius: 15,
            backgroundColor: '#d8414a',
            right: -3,
            top: -8,
            zIndex: 10,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 10,
              borderRadius: 15,
            }}>
            {cart.length}
          </Text>
        </View>
      </Pressable>
      <Pressable style={{flex: 0.11}}>
        <Icon
          name="ellipsis-vertical"
          size={18}
          color="#646a72"
          type="ionicon"
        />
      </Pressable>
    </Header>
  );
}
