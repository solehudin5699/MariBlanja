import React from 'react';
import {StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';

export default function SwiperImage(props) {
  return (
    <>
      <Swiper
        height={300}
        onMomentumScrollEnd={(e, state, context) =>
          console.log('index:', state.index)
        }
        loop={false}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        paginationStyle={styles.paginationStyle}>
        {props.images.map((item, index) => (
          <Image key={index} source={item} style={styles.image} />
        ))}
      </Swiper>
    </>
  );
}

const styles = StyleSheet.create({
  dotStyle: {
    backgroundColor: '#f3f5f7',
    width: 7,
    height: 7,
    borderRadius: 4,
  },
  activeDotStyle: {
    backgroundColor: '#118b0d',
    width: 7,
    height: 7,
    borderRadius: 4,
  },
  paginationStyle: {
    bottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    height: 300,
    width: null,
    flex: 1,
  },
});
