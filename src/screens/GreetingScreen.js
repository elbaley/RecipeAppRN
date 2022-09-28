import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const GreetingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Find great recipes</Text>
        <Text style={styles.description}>
          Simple & delicious recipes from all across the world!
        </Text>
      </View>
      <View style={styles.animationContainer}>
        <Lottie
          style={styles.animation}
          source={require('../assets/cooking.json')}
          autoPlay
          loop
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeTabScreen')}
          style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GreetingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fd7463',
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    width: '65%',
  },
  title: {
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontWeight: '300',
    fontSize: 15,
    fontFamily: 'Poppins',
  },
  animationContainer: {
    flex: 2,
  },
  animation: {
    width: Dimensions.get('window').width,
    marginTop: '-2%',
  },
  buttonContainer: {
    flex: 0.5,
  },
  button: {
    backgroundColor: 'white',
    width: '90%',
    height: 50,
    marginHorizontal: '5%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fd7463',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
