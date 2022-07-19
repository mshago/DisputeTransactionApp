import {Dispatch} from 'react';
import {API_CONFIG, getApiUrl} from '../config';
import {EAuthAction} from '../context/auth';
import {TDispatch} from '../context/global';
import {ELocalStorage} from '../types/localStorage';
import {TLoginData, TLoginResponse} from '../types/types';
import {removeToken, storeToken} from '../utils/localStorage';

export const useHandleLogin = async (
  values: TLoginData,
  dispatch: Dispatch<TDispatch>,
) => {
  const {username, password} = values;

  try {
    const response = await fetch(getApiUrl('auth/login'), {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      ...API_CONFIG,
    });
    if (response.status === 401) throw await response.text();
    if (response.ok) {
      const {token, userId}: TLoginResponse = await JSON.parse(
        await response.text(),
      );
      storeToken(ELocalStorage.TOKEN_KEY, token);
      storeToken(ELocalStorage.USER_ID, userId);
      dispatch({type: EAuthAction.SIGN_IN, token, userId});
    } else throw 'There was an error with the server.\nPlease try again later.';
  } catch (error) {
    throw error;
  }
};

export const useHandleLogout = async (dispatch: Dispatch<TDispatch>) => {
  try {
    await removeToken(ELocalStorage.TOKEN_KEY)
    await removeToken(ELocalStorage.USER_ID)
    dispatch({type:EAuthAction.SIGN_OUT})
  } catch (error) {}
};
