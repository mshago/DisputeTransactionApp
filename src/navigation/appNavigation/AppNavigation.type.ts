import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum EAppNavigationRoutes {
  HOME = 'Home',
}

export type TAppNavigationRoutes = {
  [EAppNavigationRoutes.HOME]: undefined;
};

export type TAppNavigation = NativeStackNavigationProp<TAppNavigationRoutes>;

export type TAppRouteProp = RouteProp<TAppNavigationRoutes>;