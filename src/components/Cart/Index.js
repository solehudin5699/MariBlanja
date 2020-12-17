import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable, FlatList} from 'react-native';
import {
  Container,
  Content,
  Footer,
  Card,
  CardItem,
  List,
  ListItem,
  Thumbnail,
  Button,
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import HeaderCart from './Header';
import ContentCart from './Content';
import FooterCart from './Footer';
import EmptyCart from './EmptyCart';

export default function Index() {
  const {cart} = useSelector((state) => state.cart);
  return (
    <Container>
      {cart.length ? (
        <>
          <HeaderCart />
          <ContentCart />
          <FooterCart />
        </>
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
}
