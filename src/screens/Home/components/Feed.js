import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import {Heart} from 'iconoir-react-native';
import Recipe from './Recipe';

const Feed = () => {
  function renderRecipe() {
    return <Text> 12</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>What do you want to cook today?</Text>
      </View>
      {/* <FlatList data={[1, 2, 3]} renderItem={renderRecipe} /> */}
      <Recipe />
      <Recipe />
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
    fontSize: 28,
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
});
