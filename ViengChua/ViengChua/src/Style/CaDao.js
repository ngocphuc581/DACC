import {StyleSheet} from 'react-native';
import {Color} from './Color';
import {Font} from './Font';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: Color.White,
    // padding: 20,
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
  containerList: {
    padding: 20,
  },
  containerItem: {
    width: '100%',
    backgroundColor: Color.Brown,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    marginBottom: 7,
    marginTop: 7,
  },
  containerTitle: {
    width: '100%',
    borderBottomWidth: 5,
    borderColor: Color.White,
    justifyContent: 'center',
    paddingLeft: 30,
  },
  textTitle: {
    fontSize: 18,
    color: Color.White,
    fontFamily: Font.font3,
    marginTop: 3,
    marginBottom: 3,
  },
  containerContent: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  textContent: {
    fontSize: 18,
    color: Color.White,
    fontStyle: 'italic',
  },
});
