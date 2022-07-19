import React, {FC} from 'react';
import {Text} from 'react-native';
import {Button} from '../../components/button/Button';
import {Container} from '../../components/container/Container';
import {TextInput} from '../../components/textInput/TextInput';
import {EDisputeReasons} from '../../types/types';
import {styles} from './Dispute.style';
import {TDisputeScreenView} from './Dispute.type';

export const DisputeScreenView: FC<TDisputeScreenView> = ({
  comment,
  setComment,
  reason = EDisputeReasons.FRAUD,
  setReason,
  handleReviewDispute,
}) => {
  return (
    <Container containerStyle={styles.container}>
      <TextInput
        title="Make a comment about why you are disputing this transaction"
        multiline={true}
        numberOfLines={4}
        value={comment}
        onChangeText={(value:string) => setComment(value)}
      />
      <Text>{reason}</Text>
      <Button title="Send dispute" onPress={() => handleReviewDispute()} />
    </Container>
  );
};
