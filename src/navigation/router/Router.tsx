import React, {useLayoutEffect} from 'react';
import {AuthNavigation} from '../authNavigation/AuthNavigation';
import {AppNavigation} from '../appNavigation/AppNavigation';
import { getToken } from '../../utils/localStorage';
import {TGetTokenFromLocalStorage} from './Router.type';
import {useGlobalState} from '../../context/global/global.provider';
import {EAuthAction} from '../../context/auth';
import { ELocalStorage } from '../../types/localStorage';

export const Router = () => {

  const {state, dispatch} = useGlobalState();

  useLayoutEffect(() => {
    const getTokenFromLocalStorage: TGetTokenFromLocalStorage = async () => {
      let tempToken = await getToken(ELocalStorage.TOKEN_KEY);
      dispatch({type: EAuthAction.RESTORE_TOKEN, token: tempToken});
    };
    getTokenFromLocalStorage();
  }, [dispatch]);

  return state.auth.token ? <AppNavigation /> : <AuthNavigation />;
};
