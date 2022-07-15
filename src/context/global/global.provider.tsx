import React, {useContext, useReducer, Dispatch, FC} from 'react'
import { GlobalContext } from './global.context'
import { TDispatch, TGlobalProvider, TGlobalState } from './global.type'

export const useGlobalState = () => {
  const [state, dispatch] = useContext<[TGlobalState, Dispatch<TDispatch>]>(GlobalContext)

  return {state, dispatch}
}

export const GlobalProvider:FC<TGlobalProvider> = ({children, reducer, state}) => {
  return (
    <GlobalContext.Provider value={useReducer(reducer, state)} >
      {children}
    </GlobalContext.Provider>
  )
}
