import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  FlatList,
  Pressable,
} from 'react-native';
import {Container, Header, Content, Footer} from 'native-base';
import {Icon, SearchBar} from 'react-native-elements';

export default function HeaderHome(props) {
  return (
    <Header
      androidStatusBarColor="#118b0d"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        shadowColor: 'transparent',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        // elevation: 5,
        // height: 100,
        flexDirection: 'row',
        width: '100%',
        padding: 0,
        // width: Dimensions.get('window').width,
        // borderBottomRightRadius: 15,
        // borderBottomLeftRadius: 15,
        zIndex: 25,
      }}>
      <Pressable style={{flex: 0.1, marginLeft: 0}}>
        <Icon name="arrow-left" size={20} color="#646a72" type="feather" />
      </Pressable>
      <SearchBar
        searchIcon={{
          name: 'search',
          color: 'rgba(58, 61, 66, 0.4)',
          type: 'material',
        }}
        clearIcon={{
          name: 'clear',
          color: 'rgba(58, 61, 66, 0.4)',
          type: 'material',
        }}
        showLoading={true}
        containerStyle={{
          padding: 0,
          backgroundColor: '#FFFFFF',
          margin: 0,
          borderWidth: 0,
          boxShadow: 'none',
          padding: 0,
          borderBottomWidth: 0,
          borderTopWidth: 0,
          flex: 0.6,
          // width: '95%',
        }}
        inputContainerStyle={{
          backgroundColor: '#f3f5f7',
          borderWidth: 0,
          height: 37,
          // shadowColor: 'black',
          // shadowOffset: {
          //   width: 1,
          //   height: 3,
          // },
          // shadowOpacity: 0.1,
          // shadowRadius: 5,
          // elevation: 10,
        }}
        inputStyle={{
          margin: 0,
          color: 'black',
          borderWidth: 0,
        }}
        placeholder="Search Books"
        placeholderTextColor="rgba(58, 61, 66, 0.4)"
        // onChangeText={updateSearch}
        // onEndEditing={() => {
        //   dispatch(setKeywordCreator(keyword));
        //   dispatch(setResetCreator());
        //   dispatch(getContactAPICreator(keyword, 'name', 'ASC', 1, 8));
        //   dispatch(setPageCreator(1));
        // }}
        // onClear={() => {
        //   dispatch(setResetCreator());
        //   dispatch(setKeywordCreator(''));
        //   dispatch(getContactAPICreator('', 'name', 'ASC', 1, 8));
        // }}
        // value={keyword}
        round={true}
      />
      <Pressable style={{flex: 0.1}}>
        <Icon name="home" size={18} color="#646a72" type="entypo" />
      </Pressable>
      <Pressable style={{flex: 0.1}}>
        <Icon name="shopping-cart" size={18} color="#646a72" type="feather" />
        <View
          style={{
            position: 'absolute',
            height: 18,
            width: 18,
            borderRadius: 15,
            backgroundColor: '#d8414a',
            left: 18,
            top: -8,
            zIndex: 10,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 10,
              borderRadius: 15,
            }}>
            100
          </Text>
        </View>
      </Pressable>
      <Pressable style={{flex: 0.1}}>
        <Icon name="grid" size={18} color="#646a72" type="ionicon" />
      </Pressable>
    </Header>
  );
}
