import React, {useState} from 'react';
import {Alert} from 'react-native';
import {createDispute} from '../../helpers/disputes';
import {TAppRouteProp} from '../../navigation/appNavigation/AppNavigation.type';
import {EDisputeReasons} from '../../types/types';
import {DisputeScreenView} from './Dispute.view';

export const DisputeScreen = ({route, navigation}: TAppRouteProp) => {
  const {transactionId} = route.params;
  const [comment, setComment] = useState<string>('');
  const [reason, setReason] = useState<string>(EDisputeReasons.FRAUD);

  const handleCreateDispute = async (dispute: any) => {
    await createDispute(dispute)
      .then((response) => {
        console.log(response)
        Alert.alert('Transaction Disputed', 'Your dispute has been generated', [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ]);
      })
      .catch(error => {
        Alert.alert('Upsss :(', String(error),[
          {
            text:'OK',
            onPress: () => navigation.goBack()
          }
        ]);
      });
  };

  const handleReviewDispute = () => {
    console.log('aaaa');
    if (reason && comment) {
      const dispute = {
        reason,
        comment,
        transactionId,
      };

      Alert.alert(
        'Review Dispute Before Submit it',
        'Before submit it, please check that...',
        [
          {
            text: 'Cancel',
            style: 'cancel',
            onPress: () => navigation.goBack(),
          },
          {
            text: 'Submit',
            onPress: () => handleCreateDispute(dispute),
          },
        ],
      );
    }
  };

  return (
    <DisputeScreenView
      comment={comment}
      setComment={setComment}
      reason={reason}
      setReason={setReason}
      handleReviewDispute={handleReviewDispute}
    />
  );
};
