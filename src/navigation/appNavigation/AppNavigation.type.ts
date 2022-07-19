import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export enum EAppNavigationRoutes {
  HOME = 'Home',
  DISPUTE = 'Dispute',
}

export type TAppNavigationRoutes = {
  [EAppNavigationRoutes.HOME]: undefined;
  [EAppNavigationRoutes.DISPUTE]: {
    transactionId: string;
  };
};

export type TAppNavigation = NativeStackNavigationProp<TAppNavigationRoutes>;

export type TAppRouteProp = NativeStackScreenProps<
  TAppNavigationRoutes,
  EAppNavigationRoutes.DISPUTE
>;
