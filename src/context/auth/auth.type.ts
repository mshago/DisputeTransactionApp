export type TAuthState = {
  isSignOut: boolean
  token: string | null
  isLoading: boolean
}

export type TAuthAction = {
  type:EAuthAction
  token: string | null
}

export enum EAuthAction {
  RESTORE_TOKEN = 'RESTORE_TOKEN',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}