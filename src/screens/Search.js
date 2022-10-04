import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import {Search as SearchIcon} from 'iconoir-react-native';
import Recipe from './Feed/components/Recipe';

const Search = () => {
  function renderRecipe(recipeData) {
    const {item} = recipeData;
    return <Recipe recipe={item} />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchIcon
          height={24}
          width={24}
          color="currentColor"
          style={{color: '#fd7463', paddingHorizontal: 5}}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."></TextInput>
      </View>
      {/* Search Results */}
      <FlatList
        data={[{idMeal: 52777, strMeal: 'Testing'}, 2, 3]}
        renderItem={renderRecipe}
      />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  searchContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: '#f8f7f7',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    fontSize: 14,
    borderRadius: 8,
  },
});
