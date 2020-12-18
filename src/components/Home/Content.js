import React, {useState} from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Icon, Badge} from 'react-native-elements';
import example from '../../assets/images/coverbook.jpg';
import MasonryLayout from './MasonryLayout';
import ItemProduct from './ItemProduct';
const dataDummy = [
  {
    id: 1,
    nameProduct: 'React-Native 1',
    store: 'PT. Gramedia',
    official: false,
    image: [example, example, example],
    freeOngkir: false,
    location: 'Bandung',
    grosir: true,
    price: 120000,
    stock: 100,
    ulasan: {name: ''},
    numLike: 12,
    numUnlike: 10,
    description:
      'Produk ini sangat cocok ekali banget untu Anda karena nyaman dipakai dan tidak mudah rusak. Belilah produk-produk Indonesia. Mari Cintai karya anak bangsa untuk Indonesia yang lebih baik.',
  },
  {
    id: 2,
    nameProduct:
      'React-Native Tutorial React-Native Tutorial React-Native Tutorial 2',
    store: 'PT. Gramedia',
    official: true,
    image: [example, example, example],
    freeOngkir: true,
    location: 'Bandung',
    grosir: true,
    price: 120000,
    stock: 100,
    ulasan: {name: ''},
    numLike: 12,
    numUnlike: 5,
    description:
      'Produk ini sangat cocok ekali banget untu Anda karena nyaman dipakai dan tidak mudah rusak. Belilah produk-produk Indonesia. Mari Cintai karya anak bangsa untuk Indonesia yang lebih baik.',
  },
  {
    id: 3,
    nameProduct: 'React-Native 3',
    store: 'PT. BookStore',
    official: true,
    image: [example, example, example, example, example],
    freeOngkir: true,
    location: 'Jakarta',
    grosir: true,
    price: 150000,
    stock: 100,
    ulasan: {name: ''},
    numLike: 100,
    numUnlike: 20,
    description:
      'Produk ini sangat cocok ekali banget untu Anda karena nyaman dipakai dan tidak mudah rusak. Belilah produk-produk Indonesia. Mari Cintai karya anak bangsa untuk Indonesia yang lebih baik.',
  },
  {
    id: 4,
    nameProduct: 'React-Native 4',
    store: 'PT. Gramedia',
    official: true,
    image: [example, example, example],
    freeOngkir: true,
    location: 'Bandung',
    grosir: true,
    price: 220000,
    stock: 100,
    ulasan: {name: ''},
    numLike: 12,
    numUnlike: 1,
    description:
      'Produk ini sangat cocok ekali banget untu Anda karena nyaman dipakai dan tidak mudah rusak. Belilah produk-produk Indonesia. Mari Cintai karya anak bangsa untuk Indonesia yang lebih baik.',
  },
  {
    id: 5,
    nameProduct: 'React-Native 5',
    store: 'PT. Gramedia',
    official: true,
    image: [example, example, example],
    freeOngkir: true,
    location: 'Cirebon',
    grosir: true,
    price: 100000,
    stock: 100,
    ulasan: {name: ''},
    numLike: 12,
    numUnlike: 1,
    description:
      'Produk ini sangat cocok ekali banget untu Anda karena nyaman dipakai dan tidak mudah rusak. Belilah produk-produk Indonesia. Mari Cintai karya anak bangsa untuk Indonesia yang lebih baik.',
  },
  {
    id: 6,
    nameProduct: 'React-Native 6',
    store: 'PT. Gramedia',
    official: true,
    image: [example, example, example],
    freeOngkir: true,
    location: 'Bandung',
    grosir: true,
    price: 120000,
    stock: 100,
    ulasan: {name: ''},
    numLike: 12,
    numUnlike: 1,
    description:
      'Produk ini sangat cocok ekali banget untu Anda karena nyaman dipakai dan tidak mudah rusak. Belilah produk-produk Indonesia. Mari Cintai karya anak bangsa untuk Indonesia yang lebih baik.',
  },
  {
    id: 7,
    nameProduct: 'React-Native 7',
    store: 'PT. Gramedia',
    official: true,
    image: [example, example, example],
    freeOngkir: true,
    location: 'Bandung',
    grosir: true,
    price: 120000,
    stock: 100,
    ulasan: {name: ''},
    numLike: 100,
    numUnlike: 100,
    description:
      'Produk ini sangat cocok ekali banget untu Anda karena nyaman dipakai dan tidak mudah rusak. Belilah produk-produk Indonesia. Mari Cintai karya anak bangsa untuk Indonesia yang lebih baik.',
  },
];

import {data} from '../../dataDummy/data';
export default function ContentHome(props) {
  const {product} = useSelector((state) => state.product);
  return (
    <View style={styles.container}>
      <MasonryLayout
        data={product}
        renderItem={(item) => <ItemProduct item={item} />}
      />
      <View style={styles.container_sortFilter}>
        <View style={styles.content_sortFilter}>
          <View style={styles.content_sort}>
            <Icon
              name="sort-amount-down-alt"
              type="font-awesome-5"
              size={18}
              color="#73767b"
            />
            <Text style={{color: '#73767b', marginLeft: 2}}>Sort</Text>
          </View>
          <View style={styles.content_filter}>
            <Icon name="filter" type="ant-design" size={18} color="#73767b" />
            <Text style={{color: '#73767b', marginLeft: 2}}>Filter</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width,
  },
  container_sortFilter: {
    position: 'absolute',
    bottom: 15,
    zIndex: 5,
    padding: 0,
  },
  content_sortFilter: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: 170,
    elevation: 5,
  },
  content_sort: {
    flexDirection: 'row',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content_filter: {
    flexDirection: 'row',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
