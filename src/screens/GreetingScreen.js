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
      </View>
      <Text style={styles.description}>
        Simple & delicious recipes from all across the world!
      </Text>
      <Lottie
        style={styles.animation}
        source={require('../assets/cooking.json')}
        autoPlay
        loop
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
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
    marginTop: 80,
    marginLeft: 10,
    width: '60%',
  },
  title: {
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    marginLeft: 10,
    fontWeight: '200',
    fontSize: 15,
  },
  animation: {
    width: Dimensions.get('window').width,
    marginTop: '-2%',
  },
  button: {
    backgroundColor: 'white',
    width: '90%',
    height: 50,
    marginHorizontal: '5%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: '#fd7463',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
