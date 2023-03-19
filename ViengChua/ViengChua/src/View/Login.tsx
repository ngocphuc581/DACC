import React, {useState} from 'react';
import {View, Image, ImageBackground, Keyboard} from 'react-native';
import {TextInput} from 'react-native-paper';
import Button from '../Component/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from '../Style/Login';
import TextView from '../Component/Text';
import {LoginAction} from '../../Redux/Actions/UserAction';
import {
  onHandlerCheckAccount,
  onHandlerCreateUser,
  onHandlerLogin,
} from '../API/Login_API';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
export type User = {
  _id?: string;
  username?: string;
  password?: string;
  point?: number;
  nhang?: number;
  level?: number;
  id_PhapDanh?: string;
};
const Login = () => {
  const navigation = useNavigation();
  const [State, setState] = useState(false);
  const [user, setUser] = useState<User>({
    _id: '',
    username: '',
    password: '',
    point: 0,
    level: 0,
    nhang: 0,
    id_PhapDanh: '',
  });
  const [hint, setHint] = useState(true);
  const onHandlerChangeState = () => {
    setState(!State);
  };
  const onHandlerChangeHint = () => {
    setHint(!hint);
  };
  const dispatch = useDispatch<any>();
  const onPressLogin = () => {
    // dispatch(LoginAction(user));
    onHandlerLogin(user, dispatch, navigation);
    setUser({
      username: '',
      password: '',
    });
  };
  // const User = useSelector(state => state);
  const onPressRegister = () => {
    onHandlerCheckAccount(user);
  };
  return (
    <ImageBackground
      source={require('../Image/login.png')}
      style={styles.background}
      resizeMode="cover">
      {State == false ? (
        <View style={styles.containerTitle}>
          <Button
            text={'Bắt đầu viếng chùa thôi nào !'}
            onPress={onHandlerChangeState}
            textStyle={styles.textLogin}
          />
        </View>
      ) : (
        <KeyboardAwareScrollView
          style={styles.container}
          extraHeight={0}
          zoomScale={2}>
          <View style={styles.containerHeader}>
            <TextView value="Login" textStyle={styles.title} />
          </View>
          <View style={styles.containerBody}>
            <View style={styles.containerInput}>
              <TextInput
                mode="outlined"
                label={'Username'}
                value={user.username}
                onChangeText={text => setUser({...user, username: text})}
              />
              <TextInput
                mode="outlined"
                label={'Password'}
                value={user.password}
                onChangeText={text => setUser({...user, password: text})}
                right={
                  hint ? (
                    <TextInput.Icon
                      icon="eye-off"
                      onPress={onHandlerChangeHint}
                    />
                  ) : (
                    <TextInput.Icon icon="eye" onPress={onHandlerChangeHint} />
                  )
                }
                secureTextEntry={hint == true ? true : false}
              />
            </View>
          </View>
          <View style={styles.containerFooter}>
            <Button
              text={'Đăng nhập'}
              onPress={onPressLogin}
              styleButton={styles.button}
              textStyle={styles.textLogin}
            />
            <Button
              text={'Đăng ký'}
              onPress={onPressRegister}
              styleButton={styles.button}
              textStyle={styles.textLogin}
            />
            <Button
              text={'Trở lại'}
              onPress={onHandlerChangeState}
              styleButton={styles.button}
              textStyle={styles.textLogin}
            />
          </View>
        </KeyboardAwareScrollView>
      )}
    </ImageBackground>
  );
};
export default Login;
