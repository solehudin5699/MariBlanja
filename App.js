// import React, {useEffect, useState, createRef} from 'react';
// import {Image, Text, View, Dimensions, RefreshControl} from 'react-native';
// import Masonry from 'react-native-masonry-layout';

// const {width} = Dimensions.get('window');
// const columnWidth = (width - 10) / 2 - 10;

// export default function Example() {
//   const [state, setState] = useState({
//     withHeight: false,
//     loading: false,
//   });
//   const ref = {};
//   useEffect(() => {
//     load();
//   }, []);
//   // componentDidMount() {
//   //   this.load();
//   // }

//   const load = () => {
//     setState({loading: true});
//     console.log(ref);
//     fetch('http://huaban.com/boards/17649987/?limit=10', {
//       headers: {
//         'X-Requested-With': 'XMLHttpRequest',
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setState({loading: false});
//         data = data.board.pins.map((item) => {
//           return {
//             image: 'http://img.hb.aicdn.com/' + item.file.key,
//             text: item.raw_text,
//             key: item.file.key,
//             height: (columnWidth / item.file.width) * item.file.height,
//           };
//         });
//         if (state.withHeight) {
//           ref.ref.addItemsWithHeight(data);
//         } else {
//           ref.ref.addItems(data);
//         }
//       });
//   };

//   const onScrollEnd = (event) => {
//     const scrollHeight = Math.floor(
//       event.nativeEvent.contentOffset.y +
//         event.nativeEvent.layoutMeasurement.height,
//     );
//     const height = Math.floor(event.nativeEvent.contentSize.height);
//     if (scrollHeight >= height) {
//       load();
//     }
//   };

//   // render() {
//   return (
//     <View style={{flex: 1, backgroundColor: '#EEE'}}>
//       <Masonry
//         onMomentumScrollEnd={onScrollEnd}
//         style={{flex: 1, borderWidth: 1, borderColor: 'red'}}
//         columns={2}
//         ref="ref"
//         containerStyle={{padding: 5}}
//         refreshControl={
//           <RefreshControl
//             refreshing={false}
//             // onRefresh={onRefresh}
//             tintColor="#ff0000"
//             title="Loading..."
//             titleColor="#00ff00"
//             colors={['#ff0000', '#00ff00', '#0000ff']}
//             progressBackgroundColor="#ffff00"
//           />
//         }
//         renderItem={(item) => (
//           <View
//             style={{
//               margin: 5,
//               backgroundColor: '#fff',
//               borderRadius: 5,
//               overflow: 'hidden',
//               borderWidth: 1,
//               borderColor: '#dedede',
//             }}>
//             <Image source={{uri: item.image}} style={{height: item.height}} />
//             <Text style={{padding: 5, color: '#444'}}>{item.text}</Text>
//           </View>
//         )}
//       />

//       {state.loading && (
//         <View
//           style={{
//             position: 'absolute',
//             justifyContent: 'center',
//             alignItems: 'center',
//             top: 0,
//             bottom: 0,
//             left: 0,
//             right: 0,
//             backgroundColor: 'rgba(0,0,0,0.3)',
//           }}>
//           <Text
//             style={{
//               backgroundColor: '#fff',
//               paddingVertical: 20,
//               paddingHorizontal: 30,
//               borderRadius: 10,
//             }}>
//             Loading...
//           </Text>
//         </View>
//       )}
//     </View>
//   );
//   // }
// }

import React, {Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
const {width} = Dimensions.get('window');

const styles = {
  container: {
    flex: 1,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  image: {
    width,
    // flex: 1,
    height: 400,
  },
};

export default class extends Component {
  render() {
    return (
      <View style={{height: 400}}>
        <Swiper
          style={styles.wrapper}
          height={400}
          onMomentumScrollEnd={(e, state, context) =>
            console.log('index:', state.index)
          }
          dotStyle={{
            backgroundColor: '#f3f5f7',
            width: 8,
            height: 8,
            borderRadius: 4,
          }}
          activeDotStyle={{
            backgroundColor: '#118b0d',
            width: 8,
            height: 8,
            borderRadius: 4,
          }}
          paginationStyle={{
            bottom: 25,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
          loop>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'transparent',
            }}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./src/assets/images/coverbook.jpg')}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'transparent',
            }}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./src/assets/images/coverbook.jpg')}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'transparent',
            }}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./src/assets/images/coverbook.jpg')}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'transparent',
            }}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./src/assets/images/coverbook.jpg')}
            />
          </View>
        </Swiper>
      </View>
    );
  }
}
