import {StyleSheet, Dimensions} from 'react-native';
import {Color} from './Color';
const {width: widthScreen} = Dimensions.get('window');
const {height: heightScreen} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBack: {
    width: '100%',
    height: '7%',
    backgroundColor: '#4d2719',
    padding: 5,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderColor: Color.Gray,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 24,
    color: Color.White,
    marginLeft: 10,
  },
  listItem: {
    backgroundColor: '#4d2719',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '100%',
    width: widthScreen,
  },
});
