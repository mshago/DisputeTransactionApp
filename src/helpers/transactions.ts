import {API_CONFIG, getApiUrl} from '../config';
import {ELocalStorage} from '../types/localStorage';
import {getToken} from '../utils/localStorage';

export const getTransactions = async () => {
  try {
    const userId = await getToken(ELocalStorage.USER_ID);
    const response = await fetch(getApiUrl('transactions'), {
      method: 'POST',
      body: JSON.stringify({userId}),
      ...API_CONFIG,
    });
    if (!response.ok) throw 'Something went wrong. Please try again later.';
    return JSON.parse(await response.text())
  } catch (error) {
    throw(error)
  }
};