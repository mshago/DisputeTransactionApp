import { ReactNode } from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export type TSection = {
  children:ReactNode
  containerStyle?: StyleProp<ViewStyle>;
  marginTop?: number;
  marginBottom?: number;
  marginHorizontal?: number;
};