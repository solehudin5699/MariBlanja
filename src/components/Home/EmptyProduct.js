import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export default function EmptyCart() {
  return (
    <>
      <View style={styles.container}>
        <Icon name="search-off" size={50} color="#fa591c" type="material" />
        <Text style={styles.text}>Produk kosong</Text>
        <Text style={styles.text}>atau tidak ditemukan</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontStyle: 'normal',
    fontSize: 14.5,
    color: '#118b0d',
    marginVertical: -1,
  },
});
