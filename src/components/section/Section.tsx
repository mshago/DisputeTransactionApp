import React, {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {styles} from './Section.style';
import {TSection} from './Section.type';

export const Section: FC<TSection> = ({
  containerStyle,
  marginTop = 0,
  marginBottom = 0,
  marginHorizontal = 0,
  children,
  ...props
}) => {

  const containerDynamicStyle: StyleProp<ViewStyle> = {
    marginBottom,
    marginHorizontal,
    marginTop,
  };

  return (
    <View
      style={[styles.container, containerDynamicStyle, containerStyle]}
      {...props}>
      {children}
    </View>
  );
};