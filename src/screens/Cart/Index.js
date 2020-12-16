// import React, {useState, useEffect} from 'react';
// import {View, Text, StyleSheet, Pressable, FlatList} from 'react-native';
// import {
//   Container,
//   Content,
//   Footer,
//   Card,
//   CardItem,
//   List,
//   ListItem,
//   Thumbnail,
//   Button,
// } from 'native-base';
// import CheckBox from '@react-native-community/checkbox';
// import {Icon, Input} from 'react-native-elements';
// import official from '../../assets/images/official.png';
// import unofficial from '../../assets/images/unofficial.png';
// import bebasongkir from '../../assets/images/bebasongkir.png';
// import exampleImage from '../../assets/images/kemeja.png';

// export default function Index() {
//   const [isSelectAll, setSelectAll] = useState(false);
//   function formatRupiah(num) {
//     return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
//   }
//   return (
//     <Container>
//       <View style={styles.allSelect}>
//         <View style={styles.allSelect_Checkbox}>
//           <CheckBox
//             tintColors={{true: '#118b0d', false: '#A5A1A1'}}
//             value={isSelectAll}
//             onValueChange={() => {
//               setSelectAll(!isSelectAll);
//             }}
//           />
//           <Text style={styles.allSelect_Text}>Pilih semua produk</Text>
//         </View>
//         <Pressable style={styles.allSelect_Delete}>
//           <Text style={styles.allSelect_DeleteText}>Hapus</Text>
//         </Pressable>
//       </View>
//       <View style={{flex: 1}}>
//         <FlatList
//           data={[1, 2, 3, 4, 5]}
//           numColumns={1}
//           key={1}
//           renderItem={({item, index}) => {
//             return (
//               <>
//                 <Card>
//                   <CardItem
//                     bordered
//                     style={{
//                       marginVertical: -2,
//                       marginTop: index === 0 ? -3 : -2,
//                       flexDirection: 'column',
//                       alignItems: 'flex-start',
//                     }}>
//                     <View
//                       style={{
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         justifyContent: 'flex-start',
//                         marginLeft: -15,
//                       }}>
//                       <CheckBox
//                         tintColors={{true: '#118b0d', false: '#C9C4C4'}}
//                         value={isSelectAll}
//                         onValueChange={() => {
//                           setSelectAll(!isSelectAll);
//                         }}
//                       />
//                       <Text>
//                         Toko
//                         <Text
//                           style={{
//                             color: '#000000',
//                             fontSize: 15,
//                             fontWeight: 'bold',
//                             fontStyle: 'normal',
//                           }}>
//                           {' '}
//                           Ibagstore
//                         </Text>{' '}
//                       </Text>

//                       <Thumbnail
//                         source={official}
//                         style={{
//                           width: 15,
//                           height: 15,
//                           marginLeft: 3,
//                         }}
//                       />
//                     </View>
//                     <Text
//                       style={{
//                         color: '#73767b',
//                         fontStyle: 'normal',
//                         fontSize: 14,
//                         marginLeft: 17,
//                         marginTop: -7,
//                       }}>
//                       Kota Depok
//                     </Text>
//                   </CardItem>
//                   <CardItem
//                     style={{flexDirection: 'column', alignItems: 'flex-start'}}>
//                     <View
//                       style={{
//                         flexDirection: 'row',
//                         alignItems: 'flex-start',
//                         marginLeft: -15,
//                       }}>
//                       <View style={{flex: 0.1}}>
//                         <CheckBox
//                           tintColors={{true: '#118b0d', false: '#C9C4C4'}}
//                           value={isSelectAll}
//                           onValueChange={() => {
//                             setSelectAll(!isSelectAll);
//                           }}
//                         />
//                       </View>
//                       <View
//                         style={{
//                           flex: 0.2,
//                           justifyContent: 'center',
//                           alignItems: 'center',
//                           marginRight: 7,
//                         }}>
//                         <Thumbnail
//                           source={exampleImage}
//                           style={{
//                             width: 55,
//                             height: 55,
//                             borderRadius: 3.5,
//                           }}
//                         />
//                       </View>
//                       <View style={{flex: 0.7, alignItems: 'flex-start'}}>
//                         <Text
//                           numberOfLines={2}
//                           style={{
//                             fontSize: 15,
//                             color: '#000000',
//                             lineHeight: 18,
//                             fontFamily: 'arial',
//                             marginBottom: 3,
//                             fontWeight: '700',
//                           }}>
//                           Name Produk pakaian yang dijual OLEH PENJUAL ABC Name
//                           Produk pakaian yang dijual OLEH PENJUAL ABC
//                         </Text>
//                         {true ? (
//                           <View>
//                             <Thumbnail
//                               source={bebasongkir}
//                               style={{
//                                 width: 70,
//                                 height: 20,
//                                 marginLeft: -1.5,
//                               }}
//                             />
//                           </View>
//                         ) : null}
//                         <Text style={styles.priceProduct}>
//                           Rp{formatRupiah(30000)}
//                         </Text>

//                         <View
//                           style={{
//                             flexDirection: 'row',
//                             alignItems: 'center',
//                             marginTop: 15,
//                           }}>
//                           <View
//                             style={{
//                               flex: 0.2,
//                               alignItems: 'center',
//                             }}>
//                             <Icon
//                               name="heart"
//                               size={25}
//                               color="#b4bbc4"
//                               type="ionicon"
//                               style={{alignSelf: 'center'}}
//                             />
//                           </View>
//                           <View
//                             style={{
//                               flex: 0.2,
//                               alignItems: 'center',
//                             }}>
//                             <Icon
//                               name="delete"
//                               size={25}
//                               color="#b4bbc4"
//                               type="material"
//                               style={{alignSelf: 'center'}}
//                             />
//                           </View>
//                           <View style={{flex: 0.2, alignItems: 'center'}}>
//                             <Icon
//                               name="remove-circle"
//                               size={25}
//                               color="#b4bbc4"
//                               type="ionicon"
//                               style={{alignSelf: 'center'}}
//                             />
//                           </View>
//                           <View
//                             style={{
//                               flex: 0.2,
//                               alignItems: 'center',
//                               marginHorizontal: -5,
//                               borderBottomColor: '#118b0d',
//                               borderBottomWidth: 1.5,
//                             }}>
//                             <Input
//                               style={{
//                                 textAlign: 'center',
//                                 width: '100%',
//                                 fontSize: 17,
//                               }}
//                               keyboardType="decimal-pad"
//                               inputContainerStyle={{
//                                 borderBottomColor: 'transparent',
//                                 height: 25,
//                               }}
//                               containerStyle={{
//                                 height: 25,
//                                 paddingHorizontal: -5,
//                               }}
//                               // onChangeText={handleChange('email')}
//                               // onBlur={handleBlur('email')}
//                               value={'9000'}
//                             />
//                           </View>
//                           <View style={{flex: 0.2, alignItems: 'center'}}>
//                             <Icon
//                               name="add-circle"
//                               size={25}
//                               color="#118b0d"
//                               type="ionicon"
//                               style={{alignSelf: 'center'}}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </View>
//                     <Pressable
//                       style={{
//                         alignItems: 'flex-start',
//                         marginTop: 5,
//                       }}>
//                       <Text style={styles.writeNote_forStore}>
//                         Tulis Catatan untuk Toko
//                       </Text>
//                     </Pressable>
//                   </CardItem>
//                 </Card>
//               </>
//             );
//           }}
//           keyExtractor={(index, item) => index.toString()}
//         />
//       </View>
//       <Footer
//         style={{
//           backgroundColor: 'transparant',
//           padding: 0,
//           alignItems: 'center',
//         }}>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: '#FFFFFF',
//             alignItems: 'center',
//             justifyContent: 'space-around',
//             height: 65,
//             paddingVertical: 10,
//             paddingHorizontal: 15,
//             width: '100%',
//             elevation: 5,
//           }}>
//           <View
//             style={{
//               flex: 0.55,
//               flexDirection: 'column',
//               alignItems: 'flex-start',
//               justifyContent: 'center',
//               height: '100%',
//             }}>
//             <Text style={styles.totalPrice}>Total Harga</Text>
//             <Text style={styles.totalPrice_Value}>
//               Rp{formatRupiah(2001800)}{' '}
//             </Text>
//           </View>
//           <View
//             style={{
//               flex: 0.45,
//               justifyContent: 'flex-end',
//               alignItems: 'center',
//               flexDirection: 'row',
//               height: '100%',
//             }}>
//             <Button
//               style={{
//                 width: '90%',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 borderRadius: 10,
//                 backgroundColor: '#fa591c',
//                 paddingHorizontal: 9,
//                 height: 40,
//                 elevation: 0,
//               }}>
//               <Text
//                 style={{
//                   color: '#FFFFFF',
//                   fontWeight: 'bold',
//                   fontStyle: 'normal',
//                   fontSize: 15.5,
//                   textAlign: 'center',
//                 }}>
//                 Beli (1)
//               </Text>
//             </Button>
//           </View>
//         </View>
//       </Footer>
//     </Container>
//   );
// }

// const styles = StyleSheet.create({
//   allSelect: {
//     flexDirection: 'row',
//     paddingHorizontal: 15,
//     alignItems: 'center',
//     marginTop: 10,
//     paddingBottom: 10,
//     zIndex: 5,
//     borderBottomColor: 'rgba(201, 196, 196, 0.55)',
//     borderBottomWidth: 1,
//   },
//   allSelect_Checkbox: {
//     flex: 0.7,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   allSelect_Text: {
//     fontSize: 15,
//     fontStyle: 'normal',
//     color: '#646a72',
//   },
//   allSelect_Delete: {
//     flex: 0.3,
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   allSelect_DeleteText: {
//     fontSize: 16,
//     fontStyle: 'normal',
//     fontWeight: 'bold',
//     color: '#118b0d',
//   },
//   priceProduct: {
//     color: '#fa591c',
//     fontSize: 13,
//     fontWeight: 'bold',
//     fontStyle: 'normal',
//     marginTop: 3,
//   },
//   totalPrice: {
//     color: '#000000',
//     fontSize: 15,
//     fontWeight: 'bold',
//     fontStyle: 'normal',
//   },
//   totalPrice_Value: {
//     color: '#fa591c',
//     fontSize: 18,
//     fontWeight: 'bold',
//     fontStyle: 'normal',
//     marginRight: 8,
//   },
//   writeNote_forStore: {
//     fontSize: 13,
//     fontStyle: 'normal',
//     fontWeight: 'bold',
//     color: '#118b0d',
//   },
// });

import React from 'react';
import Cart from '../../components/Cart/Index';

export default function Index() {
  return (
    <>
      <Cart />
    </>
  );
}
