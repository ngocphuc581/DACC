import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Alert,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Modal, TextInput} from 'react-native-paper';
import TextView from '../Component/Text';
import {styles} from '../Style/Account';
import {Color} from '../Style/Color';
import Button from '../Component/Button';
import {MainStackParamList} from '../../App';
import {User} from './Login';
import {useDispatch, useSelector} from 'react-redux';
import {onHandlerGetPhapDanh} from '../API/Account._API';
import {onHandlerPassword, onHandlerUpdateNhang} from '../API/Account._API';
import RNMomosdk from 'react-native-momosdk';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {UpdateNhangAction} from '../../Redux/Actions/UserAction';
const merchantname = 'CGV Cinemas';
const merchantcode = 'CGV01';
const merchantNameLabel = 'Nhà cung cấp';
const billdescription = 'Fast and Furious 8';
const enviroment = '0'; //"0": SANBOX , "1": PRODUCTION
export type PhapDanh = {
  _id?: string;
  name_PhapDanh?: string;
  level?: number;
};
const Account = ({route, navigation}: MainStackParamList) => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch<any>();
  const [user, setUser] = useState<User>({
    _id: '',
    username: '',
    password: '',
    id_PhapDanh: '',
    level: 0,
    nhang: 0,
    point: 0,
  });
  const [phapdanh, setPhapDanh] = useState<PhapDanh>({
    _id: '',
    name_PhapDanh: '',
    level: 0,
  });
  const AccountUser = useSelector(state => state.User);
  useEffect(() => {
    setUser({
      username: AccountUser.username,
      password: AccountUser.password,
      id_PhapDanh: AccountUser.id_PhapDanh,
      level: AccountUser.level,
      nhang: AccountUser.nhang,
      point: AccountUser.point,
      _id: AccountUser.id_User,
    });
    onHandlerGetPhapDanh(AccountUser.id_PhapDanh, setPhapDanh);
  }, [AccountUser]);

  const onHandlerChangePassword = () => {
    onHandlerPassword(user);
  };
  const onHandlerLogout = () => {
    navigation.navigate('Login');
  };
  const onHandlerCancelDeposit = () => {
    setState(!state);
  };
  const onHandlerOpenDeposit = () => {
    setState(!state);
  };
  const renderMomo = item => {
    let amount: number;
    const cost: string = item.momo.toString();
    const onHandlerDeposit = async () => {
      amount = item.momo;
      let jsonData: any = {};
      jsonData.enviroment = enviroment; //SANBOX OR PRODUCTION
      jsonData.action = 'gettoken'; //DO NOT EDIT
      jsonData.merchantname = merchantname; //edit your merchantname here
      jsonData.merchantcode = merchantcode; //edit your merchantcode here
      jsonData.merchantnamelabel = merchantNameLabel;
      jsonData.description = billdescription;
      jsonData.amount = item.momo; //order total amount
      jsonData.orderId = 'ID20181123192300';
      jsonData.orderLabel = 'Ma don hang';
      jsonData.appScheme = 'momocgv20170101'; // iOS App Only , match with Schemes Indentify from your  Info.plist > key URL types > URL Schemes
      console.log('data_request_payment ' + JSON.stringify(jsonData));
      if (Platform.OS === 'android') {
        let dataPayment = await RNMomosdk.requestPayment(jsonData);
        momoHandleResponse(dataPayment);
      } else {
        RNMomosdk.requestPayment(jsonData);
      }
    };
    const momoHandleResponse = async response => {
      try {
        if (response && response.status == 0) {
          //SUCCESS continue to submit momoToken,phonenumber to server
          let message = response.message;
          onHandlerUpdateNhang(user._id, amount / 1000 + user.nhang);
          dispatch(UpdateNhangAction(amount / 1000 + user.nhang));
          Alert.alert(
            'Successed',
            `Bạn đã nạp tiền thành công, bạn nhận được ${amount / 1000} nhang`,
            [
              {
                text: 'OK',
                onPress: () => setState(!state),
              },
            ],
          );
        } else {
          //let message = response.message;
          //Has Error: show message here
          console.log(response.message);
        }
      } catch (ex) {}
    };
    return (
      <View style={styles.containerItemMomo}>
        <TouchableOpacity
          style={[styles.containerItemMomo, {width: '100%', height: '100%'}]}
          onPress={onHandlerDeposit}>
          <TextView value="Momo" textStyle={styles.textTitle} />
          {cost.length <= 5 ? (
            <TextView
              value={`${cost.slice(0, 2)}.${cost.slice(2)} VNĐ`}
              textStyle={styles.textMomo}
            />
          ) : (
            <TextView
              value={`${cost.slice(0, 3)}.${cost.slice(3)} VNĐ`}
              textStyle={styles.textMomo}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image
          style={styles.backgroundHeader}
          source={require('../Image/haoquang.png')}
        />
        <Image
          style={styles.avatar}
          source={require('../Image/suthay.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.containerBody}>
        <View style={styles.containerItem}>
          <TextView
            value={`Tài khoản: ${user.username}`}
            textStyle={styles.text}
          />
        </View>
        <View style={[styles.containerItem, {backgroundColor: Color.White}]}>
          <TextView value={`ID: ${user._id}`} textStyle={styles.text} />
        </View>
        <View style={[styles.containerItem, {backgroundColor: Color.White}]}>
          <TextView value={`Level: ${user.level}`} textStyle={styles.text} />
        </View>
        <View style={[styles.containerItem, {backgroundColor: Color.White}]}>
          <TextView
            value={`Pháp danh: ${phapdanh.name_PhapDanh}`}
            textStyle={styles.text}
          />
        </View>
        <View
          style={[
            styles.containerItem,
            {
              backgroundColor: Color.White,
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
          ]}>
          <TextView
            value={`Số lượng nhang: ${user.nhang}`}
            textStyle={styles.text}
          />
          <TextView value={`Point: ${user.point}`} textStyle={styles.text} />
        </View>
        <View style={styles.containerInput}>
          <KeyboardAwareScrollView>
            <TextInput
              mode="outlined"
              label="Mật khẩu"
              secureTextEntry
              value={user.password}
              onChangeText={text => setUser({...user, password: text})}
            />
          </KeyboardAwareScrollView>
        </View>
        <View style={styles.containerButton}>
          <Button
            text="Đổi mật khẩu"
            styleButton={styles.buttonPassword}
            textStyle={styles.textButton}
            onPress={onHandlerChangePassword}
          />
          <Button
            text="Nạp tiền Momo"
            styleButton={styles.buttonMomo}
            textStyle={styles.textButton}
            onPress={onHandlerOpenDeposit}
          />
          <Button
            text="Thoát"
            styleButton={styles.buttonLogout}
            textStyle={styles.textButton}
            onPress={onHandlerLogout}
          />
        </View>
      </View>
      <Modal style={styles.containerModal} visible={state} dismissable={false}>
        <View style={styles.containerListPayment}>
          <View style={styles.containerFlatList}>
            <FlatList
              data={listMomo}
              renderItem={({item}) => renderMomo(item)}
              numColumns={3}
              horizontal={false}
            />
          </View>
          <View style={styles.containerButtonCancel}>
            <TouchableOpacity
              style={styles.buttonIconCancel}
              onPress={onHandlerCancelDeposit}>
              <Icon name="cancel" size={48} color={Color.Black} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const listMomo = [
  {
    id: 1,
    momo: 10000,
  },
  {
    id: 2,
    momo: 20000,
  },
  {
    id: 3,
    momo: 30000,
  },
  {
    id: 4,
    momo: 50000,
  },
  {
    id: 5,
    momo: 100000,
  },
  {
    id: 6,
    momo: 200000,
  },
];
export default Account;
