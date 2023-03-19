import {StyleSheet} from 'react-native';
import {Color} from './Color';
import {Font} from './Font';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Brown,
  },
  containerTop: {
    width: '100%',
    height: '50%',
  },
  containerBottom: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    color: Color.Black,
    fontFamily: Font.font6,
  },
  containerBack: {
    width: '100%',
    height: '14%',
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
  containerNhang: {
    width: '100%',
    height: '86%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNhang: {
    fontSize: 28,
    color: Color.White,
    fontFamily: Font.font2,
    textDecorationLine: 'underline',
  },
});
