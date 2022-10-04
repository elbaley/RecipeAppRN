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
    <HomeStack.Navigator
      screenOptions={{presentation: 'card', animation: 'fade'}}>
      <HomeStack.Screen
        name="Feed"
        options={{headerShown: false}}
        component={Feed}
      />
      <HomeStack.Screen
        name="RecipeDetail"
        options={{
          headerShown: false,
          gestureEnabled: true,
          fullScreenGestureEnabled: true,
        }}
        component={RecipeDetail}
      />
    </HomeStack.Navigator>
  );
}

const SearchStack = createNativeStackNavigator();
function SearchStackScreen() {
  return (
    <SearchStack.Navigator
      screenOptions={{presentation: 'card', animation: 'fade'}}>
      <SearchStack.Screen
        name="Search"
        options={{headerShown: false}}
        component={Search}
      />
      <SearchStack.Screen
        name="RecipeDetail"
        options={{
          headerShown: false,
          gestureEnabled: true,
          fullScreenGestureEnabled: true,
        }}
        component={RecipeDetail}
      />
    </SearchStack.Navigator>
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
          } else if (route.name === 'SearchTab') {
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
      <Tab.Screen name="SearchTab" component={SearchStackScreen} />
    </Tab.Navigator>
  );
}

const AppStack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          fullScreenGestureEnabled: false,
        }}>
        <AppStack.Screen name="Greeting" component={GreetingScreen} />
        <AppStack.Screen
          name="HomeTabScreen"
          options={{
            gestureEnabled: true,
          }}
          component={HomeTabScreen}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
