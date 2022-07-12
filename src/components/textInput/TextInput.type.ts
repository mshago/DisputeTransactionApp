import { StyleProp, ViewStyle } from "react-native"

export type TextInputT =  {
  title?:string
  error?:string
  isSensitive?:boolean
  style?:StyleProp<ViewStyle>
  [x:string]:any
}