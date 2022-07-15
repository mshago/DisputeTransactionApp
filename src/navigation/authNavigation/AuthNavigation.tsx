import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  TAuthNavigationRoutes,
  EAuthNavigationRoutes,
} from './AuthNavigation.type';
import {
  LoginScreen,
} from '../../screens';

const Stack = createNativeStackNavigator<TAuthNavigationRoutes>();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={EAuthNavigationRoutes.LOGIN}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};
