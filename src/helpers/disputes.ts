import {API_CONFIG, getApiUrl} from '../config';
import {ELocalStorage} from '../types/localStorage';
import {getToken} from '../utils/localStorage';

export const createDispute = async (dispute:any) => {

  /*
   * dispute = {
   *    transactionId,
   *    reason,
   *    comment,
   * }
   * 
   */
  // const thisIsFalse = true
  // try{
  //   if(thisIsFalse)
  //     throw 'Something went wrong generating your dispute. Please try again later.'
  //   return true
  // } catch(error){
  //   throw error
  // }
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
    if (!response.ok) throw 'Something went wrong generating your dispute. Please try again later.'
    return JSON.parse(await response.text())
  } catch (error) {
    throw(error)
  }
};