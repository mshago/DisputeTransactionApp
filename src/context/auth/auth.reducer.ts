import {EAuthAction, TAuthAction, TAuthState} from './auth.type';

export const authReducer = (prevState: TAuthState, action:TAuthAction) => {
  switch (action.type) {
    case EAuthAction.RESTORE_TOKEN:
      return {
        ...prevState,
        token: action.token,
        isLoading: false,
        userId: action.userId
      };
    case EAuthAction.SIGN_IN:
      return {
        ...prevState,
        token: action.token,
        isSignout: false,
        userId: action.userId
      };
    case EAuthAction.SIGN_OUT:
      return {
        ...prevState,
        token: null,
        isSignout: true,
        userId:null,
      };
    default:
      return prevState;
  }
};
