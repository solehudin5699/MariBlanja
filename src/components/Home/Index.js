import React, {useState} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {Container, Header, Content, Footer} from 'native-base';
import {Icon, SearchBar} from 'react-native-elements';
// import {useNavigation} from '@react-navigation/native';
import HeaderHome from './Header';
import ContentHome from './Content';

export default function Index() {
  // const navigation = useNavigation();
  return (
    <Container style={{backgroundColor: '#E5E5E5'}}>
      <HeaderHome />
      <ContentHome />
    </Container>
  );
}
