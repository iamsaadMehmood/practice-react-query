import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import FavoritePostsScreen from '../screens/FavoritePostsScreen';
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={'Home'}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'Favorite'}
        component={FavoritePostsScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
