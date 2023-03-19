import React, {useState} from 'react';
import {View, Image, Pressable, TouchableOpacity} from 'react-native';
import TextView from '../Component/Text';
import {Color} from '../Style/Color';
import {styles} from '../Style/GoMo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';
import {MainStackParamList} from '../../App';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateNhangAction} from '../../Redux/Actions/UserAction';
import {onHandlerUpdateNhang} from '../API/Account._API';
import Header from '../Component/Header';
const GoMo = ({navigation}: MainStackParamList) => {
  const [state, setState] = useState(true);
  const [disable, setDisable] = useState(false);
  const Account = useSelector(state => state.User);
  const dispatch: any = useDispatch();
  const onHandlerPress = () => {
    setState(!state);
    setDisable(!disable);
    setTimeout(() => {
      setState(true);
      setDisable(false);
      onHandlerUpdateNhang(Account.id_User, Account.nhang + 1);
      dispatch(UpdateNhangAction(Account.nhang + 1));
    }, 11000);
  };
  const onHandlerBack = () => {
    navigation.goBack();
    console.log(Account);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Header
          viewStyle={styles.containerBack}
          buttonStyle={styles.button}
          onPress={onHandlerBack}
          nameIcon="arrow-left"
          colorIcon={Color.White}
          sizeIcon={28}
          textStyle={styles.textButton}
          value="Trở lại"
        />
        <View style={styles.containerNhang}>
          <TextView
            value={`Số lượng nhang hiện có: ${Account.nhang}`}
            textStyle={styles.textNhang}
          />
        </View>
      </View>
      <View style={styles.containerBottom}>
        {state ? (
          <TextView value="Nhấn để gõ !!!" textStyle={styles.text} />
        ) : null}
        <Pressable
          disabled={disable}
          onPress={onHandlerPress}
          style={({pressed}) => [
            {
              opacity: pressed ? 0.8 : 1,
              backgroundColor: pressed ? 'transparent' : null,
            },
          ]}>
          <Image source={require('../Image/mo.png')} resizeMode="contain" />
        </Pressable>
        <Video
          source={require('../Image/mo.mp4')}
          audioOnly
          paused={state}
          currentPlaybackTime
        />
      </View>
    </View>
  );
};
export default GoMo;
