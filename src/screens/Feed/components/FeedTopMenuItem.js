import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  setCurrentCategory,
  clearRecipes,
  selectCurrentCategory,
} from '../../../features/recipe/recipeSlice';

const FeedTopMenuItem = ({categoryName}) => {
  const dispatch = useDispatch();
  const currentCategory = useSelector(selectCurrentCategory);
  const isActive = currentCategory === categoryName;

  return (
    <TouchableOpacity
      onPress={() => {
        //clear previous recipes
        dispatch(clearRecipes());
        //fetch new recipes
        dispatch(setCurrentCategory({category: categoryName}));
      }}
      style={[styles.menuItem, isActive && styles.activeItem]}>
      <Text style={[styles.menuItemText, isActive && styles.activeText]}>
        {categoryName}
      </Text>
    </TouchableOpacity>
  );
};

export default FeedTopMenuItem;

const styles = StyleSheet.create({
  menuItem: {
    height: 40,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
  activeItem: {
    backgroundColor: '#93c656',
  },
  menuItemText: {
    color: '#a0a0a0',
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  activeText: {
    color: 'white',
  },
});
