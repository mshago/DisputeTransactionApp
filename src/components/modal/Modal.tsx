import React, {FC} from 'react';
import {Text, View, Modal, StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {TTransaction} from '../../types/types';
import {Button} from '../button/Button';

export const CustomModal: FC<TCustomModal> = ({
  modalVisible,
  setModalVisible,
  transaction,
  onDispute
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styl.centeredView}>
        <View style={styl.modalView}>
          <View style={styl.modalHeader}>
            <Text style={styl.modalTitle}>Transaction Details</Text>
          </View>
          <View style={styl.modalContent}>
            <Text style={styl.modalText}>{transaction?.description}</Text>
            <Text style={styl.modalText}>{transaction?.amount}</Text>
            <Text style={styl.modalText}>
              {transaction?.cardNumberEndingIn}
            </Text>
            <Text style={styl.modalText}>
              {transaction?.type.toUpperCase()}
            </Text>
            <Text style={styl.modalText}>{transaction?.date}</Text>
          </View>
          <View style={styl.modalFooter}>
            <Button
              onPress={() => setModalVisible(false)}
              containerStyle={styl.outlineButton}
              titleStyle={styl.outlineButtonText}
              title="Close"
            />
            <Button containerStyle={styl.button} title="Dispute" onPress={() => onDispute(transaction?._id||'1')} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

type TCustomModal = {
  modalVisible: boolean;
  setModalVisible: (x: boolean) => void;
  transaction: TTransaction | null;
  onDispute:(x:string) => void
};

const styl = StyleSheet.create({
  centeredView: {
    backgroundColor: colors.gray_opaque,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 12,
    alignItems: 'stretch',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    alignItems: 'center',
    borderBottomColor: colors.gray_opaque,
    borderBottomWidth: 0.5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 15,
  },
  modalContent: {
    padding: 15,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '45%',
  },
  outlineButton: {
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: 'transparent',
    width: '45%',
  },
  outlineButtonText:{
    color:colors.primary,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
  },
});
