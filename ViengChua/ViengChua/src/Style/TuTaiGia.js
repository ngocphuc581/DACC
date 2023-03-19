import {StyleSheet} from 'react-native';
import {Color} from './Color';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
  },
  containerBack: {
    width: '100%',
    height: '7%',
    backgroundColor: Color.Brown,
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
  containerBottom: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#ddd',
  },
  buttonSound: {
    backgroundColor: Color.Brown,
    width: 300,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
  },
  textButtonSound: {
    color: Color.White,
    fontSize: 16,
  },
});
