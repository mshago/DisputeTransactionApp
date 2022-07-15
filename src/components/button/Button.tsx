import React, {FC} from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {styles} from './Button.style';
import {ButtonT} from './Button.type';

export const Button: FC<ButtonT> = ({
  title,
  onPress,
  containerStyle,
  titleStyle,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <TouchableOpacity
        style={[styles.container, containerStyle]}>
        <ActivityIndicator color='white'/>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
