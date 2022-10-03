import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {
  setCurrentCategory,
  clearRecipes,
} from '../../../features/recipe/recipeSlice';

const FeedTopMenuItem = ({categoryName}) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        //clear previous recipes
        dispatch(clearRecipes());
        //fetch new recipes
        dispatch(setCurrentCategory({category: categoryName}));
      }}
      style={styles.menuItem}>
      <Text style={styles.menuItemText}>{categoryName}</Text>
    </TouchableOpacity>
  );
};

export default FeedTopMenuItem;

const styles = StyleSheet.create({
  menuItem: {
    height: 40,
    backgroundColor: '#93c656',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
  menuItemText: {
    color: 'white',
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
});
