import {Dispatch} from 'react';
import {API_CONFIG, getApiUrl} from '../config';
import { EAuthAction } from '../context/auth';
import {TDispatch} from '../context/global';
import {ELocalStorage} from '../types/localStorage';
import {TLoginData, TLoginResponse} from '../types/types';
import {storeToken} from '../utils/localStorage';

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
      const {token}: TLoginResponse = await JSON.parse(await response.text());
      storeToken(ELocalStorage.TOKEN_KEY, token);
      dispatch({type:EAuthAction.SIGN_IN,token:token})
    } else throw 'There was an error with the server.\nPlease try again later.';
  } catch (error) {
    throw error;
  }
};
