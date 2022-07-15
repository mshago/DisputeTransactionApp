import { ReactNode } from 'react';
import { TAuthState } from '../auth';

export type TGlobalState = {
  auth: TAuthState,
}

export type TGlobalProvider = {
  reducer: any,
  state: any,
  children:ReactNode
}

export type TGlobalReducer = {

}

export type TDispatch = {

}