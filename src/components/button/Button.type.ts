import { StyleProp, TextStyle, ViewStyle } from "react-native"

export type ButtonT = {
  onPress?:() => void,
  title?:string
  containerStyle?:StyleProp<ViewStyle>
  titleStyle?:StyleProp<TextStyle>
}