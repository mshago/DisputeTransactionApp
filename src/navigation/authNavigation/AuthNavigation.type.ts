import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum EAuthNavigationRoutes {
  LOGIN = 'Login',
}

export type TAuthNavigationRoutes = {
  [EAuthNavigationRoutes.LOGIN]: undefined;
};

export type TAuthNavigation = NativeStackNavigationProp<TAuthNavigationRoutes>;
