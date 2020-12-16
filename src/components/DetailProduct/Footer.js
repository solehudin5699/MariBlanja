import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {Button, Footer} from 'native-base';
import {Icon} from 'react-native-elements';
import {useRoute, useNavigation} from '@react-navigation/native';

export default function FooterDetailProduct(props) {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <Footer style={styles.footer}>
      <Button style={styles.button_chat}>
        <Icon
          name="chatbubble-ellipses"
          size={25}
          color="#118b0d"
          type="ionicon"
          style={{alignSelf: 'center'}}
        />
      </Button>
      <Button style={styles.button_buy}>
        <Text style={styles.button_buyText}>Beli</Text>
      </Button>
      <Button style={styles.button_addToCart}>
        <Text style={styles.button_addToCartText}>Tambah ke Keranjang</Text>
      </Button>
    </Footer>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 65,
    paddingVertical: 10,
    // borderTopWidth: 0.1,
    // borderTopColor: '#73767b',
    elevation: 5,
  },
  button_chat: {
    backgroundColor: '#FFFFFF',
    width: 45,
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#118b0d',
    elevation: 0,
  },
  button_buy: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#fa591c',
    height: 45,
    elevation: 0,
  },
  button_buyText: {
    color: '#fa591c',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 15.5,
    textAlign: 'center',
  },
  button_addToCart: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#fa591c',
    paddingHorizontal: 9,
    height: 45,
    elevation: 0,
  },
  button_addToCartText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 15.5,
    textAlign: 'center',
  },
});
