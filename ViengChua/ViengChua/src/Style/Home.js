import {StyleSheet} from 'react-native';
import {Color} from './Color';
import {Font} from './Font';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Yellow,
  },
  containerHeader: {
    width: '100%',
    height: '50%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  containerBody: {
    width: '100%',
    height: '50%',
  },
  containerIconPhat: {
    width: '100%',
    height: '50%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.White,
    borderWidth: 4,
    bottom: 30,
    borderRadius: 10,
    borderColor: Color.Gray,
  },
  iconPhat: {
    width: '50%',
    height: '70%',
  },
  text: {
    fontSize: 18,
    fontFamily: Font.font4,
    color: Color.Black,
  },
  containerOrtherIcon: {
    width: '100%',
    height: '50%',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerIconMo: {
    width: '33%',
    height: '100%',
    // borderWidth: 1,
    padding: 5,
  },
  buttonOrtherIcon: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: Color.White,
    borderWidth: 4,
    borderColor: Color.Gray,
    borderRadius: 10,
  },
  textOrtherIcon: {
    fontSize: 16,
    color: Color.Black,
    fontFamily: Font.font4,
  },
});
