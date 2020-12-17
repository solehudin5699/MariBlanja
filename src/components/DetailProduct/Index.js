import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Content, CardItem, Card, Thumbnail} from 'native-base';
import {Icon} from 'react-native-elements';
import {useRoute} from '@react-navigation/native';
import official from '../../assets/images/official.png';
import unofficial from '../../assets/images/unofficial.png';
import bebasongkir from '../../assets/images/bebasongkir.png';
import qna from '../../assets/images/qna.png';
import carIcon from '../../assets/images/delivery.png';
import SwiperImage from './SwiperImage';
import FooterDetailProduct from './Footer';

export default function Index(props) {
  const route = useRoute();
  function formatRupiah(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return (
    <Container>
      <Content>
        <Card>
          <CardItem cardBody style={{zIndex: 9}}>
            <SwiperImage images={route.params.image} />
            <View style={styles.heart_container}>
              <View style={styles.heart_iconWrap}>
                <Icon name="heart" size={25} color="#6b727b" type="ionicon" />
              </View>
            </View>
          </CardItem>
          <CardItem bordered>
            <View style={{flex: 1, flexDirection: 'column', marginTop: 7}}>
              <View style={{justifyContent: 'flex-start', marginBottom: 8}}>
                <Text numberOfLines={2} style={styles.product_name}>
                  {route.params.nameProduct}
                </Text>
              </View>
              <View style={styles.product_priceWrap}>
                <Text style={styles.product_price}>
                  Rp{formatRupiah(route.params.price)}
                </Text>
                {route.params.freeOngkir ? (
                  <View>
                    <Thumbnail
                      source={bebasongkir}
                      style={{
                        width: 70,
                        height: 23,
                      }}
                    />
                  </View>
                ) : null}
              </View>
              <View style={styles.product_storeWrap}>
                <Text numberOfLines={2} style={styles.textProductfrom}>
                  Produk dari
                </Text>
                <Thumbnail
                  source={route.params.official ? official : unofficial}
                  style={{
                    width: 15,
                    height: 15,
                    marginRight: 5,
                  }}
                />
                <Text
                  style={
                    route.params.official
                      ? styles.textStoreOfficial
                      : styles.textStoreUnOfficial
                  }>
                  {route.params.official
                    ? 'Official Store'
                    : `${route.params.store}`}
                </Text>
              </View>
              <View style={styles.product_stockWrap}>
                <Text style={styles.textStock}>Stok tersedia</Text>
              </View>
            </View>
          </CardItem>
          <CardItem bordered>
            <View>
              <Text style={styles.textTitleDesc}>Deskripsi Produk</Text>
              <Text style={styles.textDesc}>{route.params.description}</Text>
            </View>
          </CardItem>
          <CardItem bordered>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginVertical: -10,
              }}>
              <View
                style={{
                  flex: 1 / 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text style={styles.textStar1}>
                  {(
                    (Number(route.params.numLike) /
                      Number(route.params.numLike + route.params.numUnlike)) *
                    5
                  ).toFixed(1)}
                </Text>
                <Icon name="star" size={20} color="gold" type="ant-design" />
                <Text style={styles.textStar2}>/5</Text>
              </View>
              <View
                style={{
                  flex: 1 / 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Thumbnail
                  source={qna}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
                <Text style={styles.textDiscuss}>30 Diskusi</Text>
              </View>
              <View
                style={{
                  flex: 1 / 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Thumbnail
                  source={carIcon}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
                <Text style={styles.textDelivery}>Pengiriman</Text>
              </View>
            </View>
          </CardItem>
        </Card>
      </Content>
      <FooterDetailProduct />
    </Container>
  );
}

const styles = StyleSheet.create({
  heart_container: {
    position: 'absolute',
    bottom: -25,
    right: 20,
    zIndex: 10,
  },
  heart_iconWrap: {
    backgroundColor: '#FFFFFF',
    width: 50,
    height: 50,
    borderRadius: 50,
    elevation: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  product_name: {
    color: '#000000',
    fontSize: 18,
  },
  product_priceWrap: {
    justifyContent: 'flex-start',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  product_price: {
    color: '#fa591c',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginRight: 8,
  },
  product_storeWrap: {
    justifyContent: 'flex-start',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  product_stockWrap: {
    justifyContent: 'flex-start',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
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
