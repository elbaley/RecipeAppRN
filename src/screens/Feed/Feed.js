import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Recipe from './components/Recipe';
import axios from 'axios';
import FeedTopMenuBar from './components/FeedTopMenuBar';
const Feed = ({navigation}) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(response => {
        const {meals} = response.data;
        setRecipes(meals);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);
  function renderRecipe(recipeData) {
    const {item} = recipeData;
    return <Recipe recipe={item} navigate={navigation.navigate} />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        initialNumToRender={4}
        ListHeaderComponent={FeedTopMenuBar}
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
