import {StyleSheet, Dimensions} from 'react-native';
import {Color} from './Color';
import {Font} from './Font';
const {width: widthScreen} = Dimensions.get('window');
const {height: heightScreen} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  containerHeader: {
    width: '100%',
    height: heightScreen / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInput: {
    width: '100%',
    height: '50%',
    paddingLeft: 20,
    paddingRight: 20,
    // borderWidth : 10,
    justifyContent: 'space-around',
    // borderTopColor : Color.Yellow,
    // borderLeftColor : Color.Orange,
    // borderRightColor : Color.Orange,
    // borderBottomColor : Color.Yellow
  },
  input: {},
  containerButton: {
    width: '100%',
    height: '20%',
    marginTop: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#795548',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 7,
    borderColor: Color.White,
    marginBottom: 15,
  },
  textLogin: {
    color: Color.White,
    fontSize: 24,
    fontFamily: Font.font4,
  },
  title: {
    width: '100%',
    height: '40%',
    fontSize: 52,
    color: Color.White,
    fontFamily: Font.font6,
    textAlign: 'center',
    backgroundColor: Color.Black,
  },
  containerBody: {
    width: '100%',
    height: widthScreen - 100,
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  containerFooter: {
    width: '100%',
    height: widthScreen - 100,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  containerTitle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
  },
});
