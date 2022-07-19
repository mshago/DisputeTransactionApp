import { Dispatch } from "react"

export type LoginScreenViewT = {
  error?:string
  loading?:boolean
  handleLoginOnPress?:() => void
  fields:{
    username:string,
    password:string,
  }
  setFields:Dispatch<{username:string, password:string}>
}