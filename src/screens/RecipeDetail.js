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

import React from 'react';
import {ArrowLeft} from 'iconoir-react-native';

const RecipeDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.recipeImageContainer}>
        <Image
          style={styles.recipeImage}
          source={{
            uri: 'https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg',
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
        <Text
          onPress={() => {
            Linking.openURL('https://google.com.tr');
          }}
          style={styles.heading}>
          Recipe
        </Text>
        <Text style={styles.recipe}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
          tempora! Optio, esse. Reiciendis, placeat voluptate. Dolorum sapiente
          saepe possimus necessitatibus tenetur quam voluptatibus ullam esse
          magni. Repellat, reiciendis. Sed eligendi hic qui enim exercitationem
          repudiandae alias, voluptate dignissimos amet laudantium, obcaecati
          soluta rerum laborum quia quaerat laboriosam eos provident at, facilis
          magnam vero! Consequatur quis ad magnam iusto laborum possimus tenetur
          officiis alias ducimus praesentium enim culpa, id cum modi.
        </Text>
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
  recipeContainer: {
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  heading: {fontFamily: 'Poppins', fontSize: 24, fontWeight: '600'},

  recipe: {
    fontFamily: 'Poppins',
    fontSize: 16,
  },
});
