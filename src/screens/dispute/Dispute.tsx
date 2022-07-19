import React, { FC } from 'react'
import { TAppRouteProp } from '../../navigation/appNavigation/AppNavigation.type'
import { DisputeScreenView } from './Dispute.view'

export const DisputeScreen = ({route, navigation}:TAppRouteProp) => {
  const {transactionId } = route.params
  console.log(transactionId)
  return (
    <DisputeScreenView/>
  )
}
