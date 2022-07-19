import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TAppNavigationRoutes, EAppNavigationRoutes} from './AppNavigation.type';
import {DisputeScreen, HomeScreen} from '../../screens/';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {useHandleLogout} from '../../helpers/auth';
import {useGlobalState} from '../../context/global';

const Stack = createNativeStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  const {dispatch} = useGlobalState();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name={EAppNavigationRoutes.HOME}
        component={HomeScreen}
        options={{
          title: 'Transactions',
          headerRight: () => (
            <TouchableOpacity onPress={() => useHandleLogout(dispatch)}>
              <Icon name="log-out" size={32} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name={EAppNavigationRoutes.DISPUTE}
        component={DisputeScreen}
      />
    </Stack.Navigator>
  );
};
