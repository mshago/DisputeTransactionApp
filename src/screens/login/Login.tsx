import React, {useState} from 'react';
import { useGlobalState } from '../../context/global';
import {useHandleLogin} from '../../helpers/auth';
import {LoginScreenView} from './Login.view';

export const LoginScreen = () => {
  const [fields, setFields] = useState({
    username: '123456',
    password: '123456',
  });
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const {dispatch} = useGlobalState() 


  const handleLoginOnPress = async () => {
    setError('');
    setLoading(true);
    if (fields.username && fields.password) {
      try {
        useHandleLogin(fields,dispatch);
      } catch (error) {
        setError(String(error));
        setLoading(false);
      }
    }
  };

  return (
    <LoginScreenView
      fields={fields}
      setFields={setFields}
      loading={loading}
      error={error}
      handleLoginOnPress={handleLoginOnPress}
    />
  );
};
