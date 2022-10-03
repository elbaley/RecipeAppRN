import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Recipe from './components/Recipe';
import axios from 'axios';
import FeedTopMenuBar from './components/FeedTopMenuBar';
import {useSelector, useDispatch} from 'react-redux';
import Lottie from 'lottie-react-native';

import {
  selectCurrentCategory,
  addRecipes,
} from '../../features/recipe/recipeSlice';
const Feed = ({navigation}) => {
  const dispatch = useDispatch();
  const currentCategory = useSelector(selectCurrentCategory);
  const recipes = useSelector(state => state.recipe.recipes);
  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${currentCategory}`,
      )
      .then(response => {
        const {meals} = response.data;
        dispatch(addRecipes({recipes: meals}));
      })
      .catch(e => {
        console.log(e);
      });
  }, [currentCategory]);
  function renderRecipe(recipeData) {
    const {item} = recipeData;
    return <Recipe recipe={item} navigate={navigation.navigate} />;
  }

  function handleEmpty() {
    return (
      <Lottie
        style={{width: Dimensions.get('window').width}}
        source={require('../../assets/loadingCooking.json')}
        autoPlay
        loop
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListEmptyComponent={handleEmpty}
        ListHeaderComponent={FeedTopMenuBar}
        initialNumToRender={4}
        data={recipes}
        renderItem={renderRecipe}
      />
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  headingContainer: {
    width: '90%',
    marginHorizontal: '5%',
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
});
