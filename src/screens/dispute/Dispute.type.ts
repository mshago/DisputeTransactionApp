import {Dispatch} from 'react';

export type TDisputeScreenView = {
  comment: string;
  setComment: Dispatch<string>;
  reason: string;
  setReason: Dispatch<string>;
  handleReviewDispute:() => void
};
