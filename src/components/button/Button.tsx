import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { ButtonT } from './Button.type'

export const Button:FC<ButtonT> = ({title, onPress,containerStyle,titleStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[containerStyle]}>

    </TouchableOpacity>
  )
}
