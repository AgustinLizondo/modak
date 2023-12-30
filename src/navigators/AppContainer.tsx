import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import {Artwork} from '../stores/types.ts/artwork';

export type AppContainerParamList = {
  Home: undefined;
  Detail: {
    artwork: Artwork;
  };
  Favorites: undefined;
};

const AppContainer = () => {
  const RootStack = createNativeStackNavigator<AppContainerParamList>();

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Detail" component={DetailScreen} />
      <RootStack.Screen name="Favorites" component={FavoritesScreen} />
    </RootStack.Navigator>
  );
};

export default AppContainer;
