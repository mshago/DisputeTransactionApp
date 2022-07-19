import { Dispatch } from "react"
import { TAppNavigation } from "../../navigation/appNavigation/AppNavigation.type"
import { TTransaction } from "../../types/types"

export type THomeScreen = {
  navigation:TAppNavigation
}

export type THomeScreenView = {
  error:string|null,
  loading:boolean,
  transactions:Array<TTransaction>|undefined
  onDispute:(id:string) => void
  modalVisible:boolean
  setModalVisible:Dispatch<boolean>
  selectedTransaction:TTransaction|null
  handleOnViewTransaction:any
}