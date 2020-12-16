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
import CheckBox from '@react-native-community/checkbox';
import {Icon, Input} from 'react-native-elements';
import official from '../../assets/images/official.png';
import unofficial from '../../assets/images/unofficial.png';
import bebasongkir from '../../assets/images/bebasongkir.png';
import exampleImage from '../../assets/images/kemeja.png';
import HeaderCart from './Header';
import FooterCart from './Footer';

export default function Index() {
  const [isSelectAll, setSelectAll] = useState(false);
  function formatRupiah(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return (
    <Container>
      <HeaderCart />
      <View style={{flex: 1}}>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          numColumns={1}
          key={1}
          renderItem={({item, index}) => {
            return (
              <>
                <Card
                  style={{
                    marginTop: index === 0 ? -3 : -1,
                  }}>
                  <CardItem
                    style={{
                      // marginVertical: -2,
                      // marginTop: index === 0 ? -3 : -1,
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}>
                    <View style={styles.store_Container}>
                      <CheckBox
                        tintColors={{true: '#118b0d', false: '#C9C4C4'}}
                        value={isSelectAll}
                        onValueChange={() => {
                          setSelectAll(!isSelectAll);
                        }}
                      />
                      <Text>
                        Toko
                        <Text style={styles.store_Name}> Ibagstore</Text>
                      </Text>

                      <Thumbnail
                        source={official}
                        style={styles.store_OfficialUnOfficial}
                      />
                    </View>
                    <Text style={styles.store_Location}>Kota Depok</Text>
                  </CardItem>
                  {[1, 2].map((product, indexProduct) => {
                    return (
                      <CardItem
                        key={indexProduct}
                        style={{
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                        }}>
                        <View style={styles.detailProd_Container}>
                          <View style={{flex: 0.1}}>
                            <CheckBox
                              tintColors={{true: '#118b0d', false: '#C9C4C4'}}
                              value={isSelectAll}
                              onValueChange={() => {
                                setSelectAll(!isSelectAll);
                              }}
                            />
                          </View>
                          <View style={styles.detailProd_ImgWrap}>
                            <Thumbnail
                              source={exampleImage}
                              style={{
                                width: 55,
                                height: 55,
                                borderRadius: 3.5,
                              }}
                            />
                          </View>
                          <View style={styles.detailProd_InfoWrap}>
                            <Text
                              numberOfLines={2}
                              style={styles.detailProd_Name}>
                              Name Produk pakaian yang dijual OLEH PENJUAL ABC
                              Name Produk pakaian yang dijual OLEH PENJUAL ABC
                            </Text>
                            {true ? (
                              <View>
                                <Thumbnail
                                  source={bebasongkir}
                                  style={styles.detailProd_BebasOngkir}
                                />
                              </View>
                            ) : null}
                            <Text style={styles.detailProd_Price}>
                              Rp{formatRupiah(30000)}
                            </Text>

                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 15,
                              }}>
                              <View
                                style={{
                                  flex: 0.2,
                                  alignItems: 'center',
                                }}>
                                <Icon
                                  name="heart"
                                  size={25}
                                  color="#b4bbc4"
                                  type="ionicon"
                                  style={{alignSelf: 'center'}}
                                />
                              </View>
                              <View
                                style={{
                                  flex: 0.2,
                                  alignItems: 'center',
                                }}>
                                <Icon
                                  name="delete"
                                  size={25}
                                  color="#b4bbc4"
                                  type="material"
                                  style={{alignSelf: 'center'}}
                                />
                              </View>
                              <View style={{flex: 0.2, alignItems: 'center'}}>
                                <Icon
                                  name="remove-circle"
                                  size={25}
                                  color="#b4bbc4"
                                  type="ionicon"
                                  style={{alignSelf: 'center'}}
                                />
                              </View>
                              <View
                                style={{
                                  flex: 0.2,
                                  alignItems: 'center',
                                  marginHorizontal: -5,
                                  borderBottomColor: '#118b0d',
                                  borderBottomWidth: 1.5,
                                }}>
                                <Input
                                  style={{
                                    textAlign: 'center',
                                    width: '100%',
                                    fontSize: 17,
                                  }}
                                  keyboardType="decimal-pad"
                                  inputContainerStyle={{
                                    borderBottomColor: 'transparent',
                                    height: 25,
                                  }}
                                  containerStyle={{
                                    height: 25,
                                    paddingHorizontal: -5,
                                  }}
                                  // onChangeText={handleChange('email')}
                                  // onBlur={handleBlur('email')}
                                  value={'9000'}
                                />
                              </View>
                              <View style={{flex: 0.2, alignItems: 'center'}}>
                                <Icon
                                  name="add-circle"
                                  size={25}
                                  color="#118b0d"
                                  type="ionicon"
                                  style={{alignSelf: 'center'}}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                        <Pressable
                          style={{
                            alignItems: 'flex-start',
                            marginTop: 5,
                          }}>
                          <Text style={styles.writeNote_forStore}>
                            Tulis Catatan untuk Toko
                          </Text>
                        </Pressable>
                      </CardItem>
                    );
                  })}
                </Card>
              </>
            );
          }}
          keyExtractor={(index, item) => index.toString()}
        />
      </View>
      <FooterCart />
    </Container>
  );
}

const styles = StyleSheet.create({
  store_Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: -15,
  },
  store_Name: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  store_OfficialUnOfficial: {
    width: 15,
    height: 15,
    marginLeft: 3,
  },
  store_Location: {
    color: '#73767b',
    fontStyle: 'normal',
    fontSize: 14,
    marginLeft: 17,
    marginTop: -7,
  },
  detailProd_Container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: -15,
  },
  detailProd_ImgWrap: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
  },
  detailProd_InfoWrap: {
    flex: 0.7,
    alignItems: 'flex-start',
  },
  detailProd_Name: {
    fontSize: 15,
    color: '#000000',
    lineHeight: 18,
    fontFamily: 'arial',
    marginBottom: 3,
    fontWeight: '700',
  },
  detailProd_BebasOngkir: {
    width: 70,
    height: 20,
    marginLeft: -1.5,
  },
  detailProd_Price: {
    color: '#fa591c',
    fontSize: 13,
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginTop: 3,
  },
  writeNote_forStore: {
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#118b0d',
  },
});
