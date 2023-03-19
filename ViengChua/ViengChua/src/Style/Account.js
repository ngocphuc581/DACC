import {Dimensions, StyleSheet} from 'react-native';
import {Color} from './Color';
import {Font} from './Font';
const {height: heightScreen} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    width: '100%',
    height: '40%',
    backgroundColor: Color.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundHeader: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  avatar: {
    width: '30%',
    height: '50%',
    borderRadius: 200,
  },
  containerBody: {
    width: '100%',
    height: '60%',
  },
  containerItem: {
    width: '100%',
    height: '10%',
    backgroundColor: Color.Gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: Color.Black,
    fontFamily: Font.font4,
  },
  containerInput: {
    width: '100%',
    height: 80,
    paddingLeft: 10,
    paddingRight: 10,
  },
  containerButton: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonPassword: {
    width: '30%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: Color.Blue,
  },
  buttonMomo: {
    width: '30%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: Color.Pink,
  },
  buttonLogout: {
    width: '30%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: Color.Brown,
  },
  textButton: {
    color: Color.White,
    fontSize: 16,
  },
  containerModal: {
    flex: 1,
    position: 'absolute',
  },
  containerListPayment: {
    width: '100%',
    height: '70%',
    backgroundColor: Color.White,
  },
  containerFlatList: {
    width: '100%',
    height: '80%',
  },
  containerItemMomo: {
    width: '33%',
    height: heightScreen - 600,
    backgroundColor: Color.Pink,
    marginRight: 5,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButtonCancel: {
    width: '100%',
    height: '20%',
    backgroundColor: Color.White,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textMomo: {
    color: Color.Pink,
    fontSize: 18,
    backgroundColor: Color.White,
    padding: 3,
    borderRadius: 7,
    fontWeight: 'bold',
  },
  textTitle: {
    fontSize: 22,
    fontFamily: Font.font2,
    color: Color.White,
  },
  buttonIconCancel: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
