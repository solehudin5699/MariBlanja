import React, {useState} from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Icon, Badge} from 'react-native-elements';
import example from '../../assets/images/coverbook.jpg';
import MasonryLayout from './MasonryLayout';
import ItemProduct from './ItemProduct';

export default function ContentHome(props) {
  const {product} = useSelector((state) => state.product);
  return (
    <>
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
    </>
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
