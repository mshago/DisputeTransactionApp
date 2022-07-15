import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TAppNavigationRoutes, EAppNavigationRoutes} from './AppNavigation.type';
import {
  HomeScreen
} from '../../screens/';

const Stack = createNativeStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={EAppNavigationRoutes.HOME}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
