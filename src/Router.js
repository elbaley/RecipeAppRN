import React from 'react';
//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//Screens
import GreetingScreen from './screens/GreetingScreen';
import Feed from './screens/Feed';
import Search from './screens/Search';
import RecipeDetail from './screens/RecipeDetail';
//Icons
import {Home as HomeIcon, Search as SearchIcon} from 'iconoir-react-native';

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Feed"
        options={{headerShown: false}}
        component={Feed}
      />
      <HomeStack.Screen
        name="RecipeDetail"
        options={{headerShown: false}}
        component={RecipeDetail}
      />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function HomeTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: '#e8eceb',
          borderTopWidth: 0.5,
        },
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
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
        },
      })}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}

const AppStack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Greeting" component={GreetingScreen} />
        <AppStack.Screen name="HomeTabScreen" component={HomeTabScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
