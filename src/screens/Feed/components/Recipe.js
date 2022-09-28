import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Heart, StarOutline} from 'iconoir-react-native';

const Recipe = ({navigate}) => {
  return (
    <View style={styles.productContainer}>
      <View>
        <Image
          style={styles.productImage}
          source={{
            uri: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2005%2F07%2F25%2Fhot-cold-chicken-spinach-salad-su-2000.jpg',
          }}
        />
        <View style={styles.ratingContainer}>
          <StarOutline height={24} width={24} fill="#ffb800" strokeWidth="0" />
          <Text style={styles.ratingText}>5.0</Text>
        </View>
      </View>
      <View style={styles.productInfoContainer}>
        <View style={styles.leftInfo}>
          <Text
            onPress={() => {
              navigate('RecipeDetail', {id: 123});
            }}
            style={styles.title}>
            Spinach Salad
          </Text>
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
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
    position: 'absolute',
    right: '4%',
    top: '7%',
    width: 75,
  },
  ratingText: {
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '600',
    color: '#2a2b2a',
  },
});
