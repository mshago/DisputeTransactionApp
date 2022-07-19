import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TListItem } from "./ListItem.type";
import { styles } from './ListItem.style'
import { getDateFormatted } from "../../utils/date";
import Icon from "react-native-vector-icons/Ionicons";

export const ListItem:FC<TListItem> = ({date, description, amount, onPress, disputed}) => (
  <View style={styles.item}>
    <View style={styles.leftContent}>
      <Text>{getDateFormatted(date)}</Text>
      <Text numberOfLines={2} style={styles.description}>{description}</Text>
      {disputed && <Text style={styles.disputeText}>Disputed</Text>}
    </View>
    <View style={styles.rightContent}>
      <Text style={styles.amount}>{`$${amount.toFixed(2)}`}</Text>
        <TouchableOpacity style={styles.options} onPress={onPress}>
          <Icon name="ellipsis-vertical-sharp" size={28} />
        </TouchableOpacity>
    </View>
  </View>
);