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
import Recipe from './components/Recipe';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const RecipeDetail = () => {
  return <Text>Test</Text>;
};
const Feed = ({navigation}) => {
  function renderRecipe() {
    return <Recipe navigate={navigation.navigate} />;
    return <Text>Testing</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>
                What do you want to cook today?
              </Text>
            </View>
          );
        }}
        data={[1, 2, 3]}
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
