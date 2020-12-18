import React, {useState} from 'react';
import {Container} from 'native-base';
import {useSelector} from 'react-redux';
import HeaderHome from './Header';
import ContentHome from './Content';
import EmptyProduct from './EmptyProduct';

export default function Index() {
  const {product} = useSelector((state) => state.product);
  return (
    <Container style={{backgroundColor: '#E5E5E5'}}>
      <HeaderHome />
      {product.length ? <ContentHome /> : <EmptyProduct />}
    </Container>
  );
}
