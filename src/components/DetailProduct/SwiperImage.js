import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, Text, View, Pressable} from 'react-native';
import {
  Container,
  Header,
  Button,
  Content,
  CardItem,
  Card,
  Thumbnail,
  Footer,
} from 'native-base';
import {Icon} from 'react-native-elements';
import {useRoute, useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import official from '../../assets/images/official.png';
import unofficial from '../../assets/images/unofficial.png';
import bebasongkir from '../../assets/images/bebasongkir.png';
import qna from '../../assets/images/qna.png';
import carIcon from '../../assets/images/delivery.png';
import FooterDetailProduct from './Footer';

export default function Index(props) {
  const navigation = useNavigation();
  const route = useRoute();
  function formatRupiah(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return (
    <>
      <Swiper
        height={300}
        onMomentumScrollEnd={(e, state, context) =>
          console.log('index:', state.index)
        }
        loop={false}
        dotStyle={{
          backgroundColor: '#f3f5f7',
          width: 7,
          height: 7,
          borderRadius: 4,
        }}
        activeDotStyle={{
          backgroundColor: '#118b0d',
          width: 7,
          height: 7,
          borderRadius: 4,
        }}
        paginationStyle={{
          bottom: 15,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {props.images.map((item, index) => (
          <Image
            key={index}
            source={item}
            style={{height: 300, width: null, flex: 1}}
          />
        ))}
      </Swiper>
    </>
  );
}

const styles = StyleSheet.create({
  textProduct: {
    color: '#000000',
    fontSize: 18,
  },
  textPrice: {
    color: '#fa591c',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginRight: 8,
  },
  textTitleDesc: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    marginRight: 8,
    letterSpacing: 1,
    marginBottom: 5,
  },
  textDesc: {
    color: '#73767b',
    fontSize: 14,
    fontStyle: 'normal',
    marginRight: 8,
    fontFamily: 'arial',
    textAlign: 'justify',
  },
  textProductfrom: {
    color: '#73767b',
    fontSize: 14.5,
    fontStyle: 'normal',
    marginRight: 8,
    fontFamily: 'arial',
  },
  textStoreOfficial: {
    color: '#71029e',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  textStoreUnOfficial: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  textStock: {
    color: '#73767b',
    fontSize: 14.5,
    fontStyle: 'normal',
    marginRight: 8,
    fontFamily: 'arial',
  },
  textDiscuss: {
    color: '#118b0d',
    fontSize: 14,
    fontStyle: 'normal',
    fontFamily: 'arial',
  },
  textDelivery: {
    color: '#118b0d',
    fontSize: 14,
    fontStyle: 'normal',
    fontFamily: 'arial',
  },
  textStar1: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  textStar2: {
    marginBottom: -5,
    fontFamily: 'arial',
    fontStyle: 'normal',
    color: '#000000',
  },
  footer: {
    backgroundColor: 'white',
  },
});
