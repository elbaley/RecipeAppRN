import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Heart} from 'iconoir-react-native';

const Recipe = () => {
  return (
    <View style={styles.productContainer}>
      <Image
        style={styles.productImage}
        source={{
          uri: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2005%2F07%2F25%2Fhot-cold-chicken-spinach-salad-su-2000.jpg',
        }}
      />
      <View style={styles.productInfoContainer}>
        <View style={styles.leftInfo}>
          <Text style={styles.title}>Spinach Salad</Text>
          <Text style={styles.calories}>165 cal • 15 min</Text>
        </View>
        <View>
          <Heart
            style={styles.heartIcon}
            height={30}
            width={30}
            color="currentColor"
            strokeWidth="2"
            stroke="#fff"
            // fill={'#e94a4b'}
          />
        </View>
      </View>
    </View>
  );
};

export default Recipe;

const styles = StyleSheet.create({
  productContainer: {
    marginHorizontal: '5%',
    marginTop: 10,
  },
  productImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 24,
  },
  calories: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    color: 'grey',
    fontSize: 16,
  },
  heartIcon: {
    // backgroundColor: 'red',
    color: '#c0c4cb',
  },
});
