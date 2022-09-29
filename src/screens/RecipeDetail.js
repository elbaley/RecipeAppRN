import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import {ArrowLeft} from 'iconoir-react-native';
import axios from 'axios';
const RecipeDetail = ({navigation, route}) => {
  const {recipeId} = route.params;
  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    console.log('rendering recipe detail!');
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then(response => {
        const {meals} = response.data;
        setRecipe(meals[0]);
      })
      .catch(e => {
        console.log(e);
      });
  }, [recipeId]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.recipeImageContainer}>
        <Image
          style={styles.recipeImage}
          source={{
            uri: recipe?.strMealThumb,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButton}>
          <ArrowLeft
            height={32}
            width={32}
            style={{color: 'white'}}
            color="currentColor"
            strokeWidth="2"
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.recipeContainer}>
        <Text style={styles.heading}>{recipe?.strMeal}</Text>
        <Text style={styles.recipe}>{recipe?.strInstructions}</Text>
        <TouchableOpacity
          style={styles.watchOnYoutubeBtn}
          onPress={() => {
            Linking.openURL(recipe?.strYoutube);
          }}>
          <Text style={{color: 'white', fontSize: 16, fontFamily: 'Poppins'}}>
            Watch on Youtube
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default RecipeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  recipeImageContainer: {
    height: 350,
    alignItems: 'center',
    overflow: 'hidden',
  },
  recipeContainer: {
    paddingTop: 10,
    flex: 1,
  },
  recipeImage: {
    height: 350,
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  backButton: {
    position: 'absolute',
    backgroundColor: '#2d2d2f',
    borderRadius: 5,
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    top: 50,
    left: 10,
  },
  heading: {fontFamily: 'Poppins', fontSize: 24, fontWeight: '600'},

  recipe: {
    fontFamily: 'Poppins',
    fontSize: 16,
  },
  watchOnYoutubeBtn: {
    height: 60,
    marginHorizontal: 25,
    marginVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 8,
  },
});
