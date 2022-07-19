import {StyleSheet} from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
  container: {
    flexGrow: 1,
    flex: 1,
    backgroundColor:'white',
  },
  content: {
    flex: 1,
  },
  loading: {
    backgroundColor:colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


