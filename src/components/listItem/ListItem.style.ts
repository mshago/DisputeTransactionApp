import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  item: {
    paddingVertical: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  description:{
    fontSize:16,
    fontWeight:'bold',

  },
  leftContent: {
    maxWidth:'50%',
    paddingLeft:20,
  },
  rightContent:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  amount: {
    fontSize:16,
    fontWeight:'bold'
  },
  options:{
    paddingHorizontal:10,
  },
  disputeText:{
    color:colors.red
  }
});
