import React from 'react';
import {StyleSheet, Dimensions, View, ScrollView} from 'react-native';

export default function Index({data, renderItem}) {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          width: Dimensions.get('window').width,
          justifyContent: 'space-evenly',
          paddingHorizontal: 10,
        }}>
        <View style={{flex: 0.49}}>
          {data
            .filter((item, index) => {
              return (index + 1) % 2 == 1;
            })
            .map((item, index) => {
              return (
                <View key={index} style={{width: '100%'}}>
                  {renderItem(item)}
                </View>
              );
            })}
        </View>
        <View style={{flex: 0.49}}>
          {data
            .filter((item, index) => {
              return (index + 1) % 2 == 0;
            })
            .map((item, index) => {
              return (
                <View key={index} style={{width: '100%'}}>
                  {renderItem(item)}
                </View>
              );
            })}
        </View>
      </View>
    </ScrollView>
  );
}
