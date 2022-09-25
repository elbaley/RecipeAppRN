import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';

const Feed = () => {
  function renderRecipe() {
    return <Text> 12</Text>;
  }
  return (
    <SafeAreaView>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>What do you want to cook today?</Text>
      </View>
      {/* <FlatList data={[1, 2, 3]} renderItem={renderRecipe} /> */}
      <View>
        <View style={styles.productContainer}>
          <View style={styles.productImageContainer}>
            <Image
              style={styles.productImage}
              source={{
                uri: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2018%2F07%2F07%2F8306980.jpg',
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  headingContainer: {
    width: '90%',
    marginHorizontal: '5%',
  },
  heading: {
    fontSize: 28,
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  productContainer: {
    marginHorizontal: '5%',
    backgroundColor: 'green',
    alignItems: 'center',
  },
  productImage: {
    height: 300,
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
});
