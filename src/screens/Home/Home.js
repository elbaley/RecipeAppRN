import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from './components/Feed';
import Search from './components/Search';
import {Home as HomeIcon, Search as SearchIcon} from 'iconoir-react-native';

const Tab = createBottomTabNavigator();

const Home = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: '#e8eceb',
          borderTopWidth: 0.5,
          // backgroundColor: 'green',
        },
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Feed') {
            return (
              <HomeIcon
                height={30}
                width={30}
                color="currentColor"
                strokeWidth="2"
                stroke="#fff"
                // style={{color: '#fd7463'}}
                style={{color: focused ? '#fd7463' : '#c0c4cb'}}
              />
            );
          } else if (route.name === 'Search') {
            return (
              <SearchIcon
                height={30}
                width={30}
                color="currentColor"
                strokeWidth="2"
                stroke="#fff"
                // style={{color: '#fd7463'}}
                style={{color: focused ? '#fd7463' : '#c0c4cb'}}
              />
            );
          }

          // You can return any component that you like here!
          return <Text>FF</Text>;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Feed"
        options={{headerShown: false, tabBarLabel: 'Home'}}
        component={Feed}
      />
      <Tab.Screen name="Search" component={Search} />
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
