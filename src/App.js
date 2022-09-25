import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GreetingScreen from './screens/GreetingScreen';
import Home from './screens/Home/';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Greeting"
          component={GreetingScreen}
        />
        <Stack.Screen
          options={{headerShown: false, gestureEnabled: true}}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
