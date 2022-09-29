import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Heart, StarOutline} from 'iconoir-react-native';

const Recipe = ({navigate, recipe}) => {
  const {idMeal, strMeal, strMealThumb} = recipe;
  return (
    <View style={styles.productContainer}>
      <View>
        <Image
          style={styles.productImage}
          source={{
            uri: strMealThumb,
          }}
        />
        <View style={styles.ratingContainer}>
          <StarOutline height={24} width={24} fill="#ffb800" strokeWidth="0" />
          <Text style={styles.ratingText}>5.0</Text>
        </View>
      </View>
      <View style={styles.productInfoContainer}>
        <View style={styles.leftInfo}>
          <TouchableOpacity
            onPress={() => {
              navigate('RecipeDetail', {recipeId: idMeal});
            }}>
            <Text style={styles.title}>{strMeal}</Text>
          </TouchableOpacity>

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
