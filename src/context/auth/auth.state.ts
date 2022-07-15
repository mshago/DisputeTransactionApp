import {TAuthState} from './auth.type'

export const authInitialState:TAuthState = {
  isSignOut: false,
  token: null,
  isLoading: true,
}