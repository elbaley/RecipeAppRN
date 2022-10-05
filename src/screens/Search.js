import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Search as SearchIcon} from 'iconoir-react-native';
import Recipe from './Feed/components/Recipe';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    if (searchTerm) {
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`,
        )
        .then(response => {
          const {meals} = response.data;
          setSearchResults(meals);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }, [searchTerm]);
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
          defaultValue={searchTerm}
          onChangeText={term => {
            setSearchTerm(term);
          }}
          placeholder="Search..."
        />
      </View>
      {/* Search Results */}
      <FlatList data={searchResults} renderItem={renderRecipe} />
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
