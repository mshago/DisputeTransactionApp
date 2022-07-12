import React, {FC, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput as NativeTextInput,
  View,
} from 'react-native';
import {TextInputT} from './TextInput.type';
import {styles} from './TextInput.style';

export const TextInput: FC<TextInputT> = ({
  title,
  error,
  touched,
  isSensitive,
  style: customStyles,
  ...rest
}) => {

  return (
    <View style={[styles.formInputContainer, customStyles]}>
      {title && <Text style={styles.formTitle}>{title}</Text>}
      <NativeTextInput
        style={styles.formInput}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={isSensitive}
        {...rest}
      />
    </View>
  );
};
