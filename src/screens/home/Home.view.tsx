import React, {FC, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Container} from '../../components/container/Container';
import {ListItem} from '../../components/listItem/ListItem';
import {CustomModal} from '../../components/modal/Modal';
import { TTransaction } from '../../types/types';
import {styles} from './Home.style';
import {THomeScreenView} from './Home.type';

export const HomeScreenView: FC<THomeScreenView> = ({
  loading,
  error = null,
  transactions,
  onDispute,
  modalVisible = false,
  setModalVisible,
  selectedTransaction,
  handleOnViewTransaction
}) => {

  return (
    <Container isScrollViewDisabled isLoading={loading}>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={() => setModalVisible(!modalVisible)}
        transaction={selectedTransaction}
        onDispute={onDispute}
      />
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            {error || "There's no transactions in this account"}
          </Text>
        )}
        data={transactions}
        renderItem={({item}) => (
          <ListItem
            date={item.date}
            description={item.description}
            amount={item.amount}
            onPress={() => handleOnViewTransaction(item)}
          />
        )}
        keyExtractor={item => item._id}
      />
    </Container>
  );
};
