import { useIsFocused } from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {getTransactions} from '../../helpers/transactions';
import {EAppNavigationRoutes} from '../../navigation/appNavigation/AppNavigation.type';
import {TTransaction} from '../../types/types';
import {THomeScreen} from './Home.type';
import {HomeScreenView} from './Home.view';

export const HomeScreen: FC<THomeScreen> = ({navigation}) => {
  const [transactions, setTransactions] = useState<Array<TTransaction>>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<TTransaction|null>(null)

  const isFocused = useIsFocused();

  useEffect(() => {
    Promise.resolve(getTransactions())
      .then(value => {
        setTransactions(
          value.sort((a: any, b: any) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          }),
        );
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [isFocused]);

  const handleOnDisputeTransaction = (transactionId: string) => {
    setModalVisible(false)
    navigation.navigate(EAppNavigationRoutes.DISPUTE, {transactionId});
  };

  const handleOnViewTransaction = (transaction:TTransaction) => {
    setSelectedTransaction(transaction)
    setModalVisible(true)
  }

  return (
    <HomeScreenView
      transactions={transactions}
      error={error}
      loading={loading}
      onDispute={handleOnDisputeTransaction}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      selectedTransaction={selectedTransaction}
      handleOnViewTransaction={handleOnViewTransaction}
    />
  );
};
