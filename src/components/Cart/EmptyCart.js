import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Thumbnail, Content} from 'native-base';
import emptyIcon from '../../assets/images/EmptyIcon.png';

export default function EmptyCart() {
  return (
    <>
      <View style={styles.container}>
        <Thumbnail source={emptyIcon} style={styles.image} />
        <Text style={styles.text}>Keranjang Anda</Text>
        <Text style={styles.text}>masih kosong</Text>
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
    fontSize: 16,
    color: '#118b0d',
  },
});
