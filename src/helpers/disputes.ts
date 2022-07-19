import {API_CONFIG, getApiUrl} from '../config';
import {ELocalStorage} from '../types/localStorage';
import {getToken} from '../utils/localStorage';

export const createDispute = async (dispute:any) => {

  /**
   * dispute = {
   *    transactionId,
   *    reason,
   *    comment,
   * }
   * 
   */
  try {
    const userId = await getToken(ELocalStorage.USER_ID);

    const response = await fetch(getApiUrl('disputes'), {
      method: 'POST',
      body: JSON.stringify({
        ...dispute,
        userId,
      }),
      ...API_CONFIG,
    });
    if (!response.ok) throw 'Something went wrong. Please try again later.';
    return JSON.parse(await response.text())
  } catch (error) {
    throw(error)
  }
};