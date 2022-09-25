import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from './components/Feed';

const Tab = createBottomTabNavigator();

const Home = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" options={{headerShown: false}} component={Feed} />
      <Tab.Screen name="Settings" component={Feed} />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  heading: {
    marginLeft: 10,
    marginTop: 10,
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '500',
  },
});
