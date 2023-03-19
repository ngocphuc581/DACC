import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Alert,
} from 'react-native';
import {MainStackParamList} from '../../App';
import {styles} from '../Style/Phat';
import Header from '../Component/Header';
import {Color} from '../Style/Color';
import {PhatProps} from './CategoryPhat';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Octicons';
import {useDispatch, useSelector} from 'react-redux';
import {User} from './Login';
import {onHandlerUpdatePoint} from '../API/Phat_API';
const Phat = ({route, navigation}: MainStackParamList) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.User);
  const {props}: PhatProps | any = route.params;
  const [stateNhang, setStateNhang] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const animationOpacity = useRef(new Animated.Value(0)).current;
  const onHandlerBack = () => {
    navigation.goBack();
  };
  const onHandlerThapNhang = () => {
    setDisabled(true);
    Animated.timing(animationOpacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      Alert.alert('Successed', 'Thắp nhang thành công', [
        {
          text: 'OK',
          onPress: () => {
            setStateNhang(true);
            onHandlerUpdatePoint(user, dispatch);
          },
        },
      ]);
    }, 3000);
  };
  const onHandlerTakeOut = (): void => {
    Animated.timing(animationOpacity, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      Alert.alert('Successed', 'Gỡ nhang thành cồng', [
        {
          text: 'OK',
          onPress: () => {
            setStateNhang(false);
            setDisabled(false);
          },
        },
      ]);
    }, 3000);
  };
  const onHandlerButtonQuestion = (): void => {
    Alert.alert(
      'Thông báo',
      'Mỗi khi thắp nhang bạn sẽ bị trừ 1 nhang và được cộng 10 point',
    );
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require('../Image/bantho.png')}
      resizeMode="cover">
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
      <View style={styles.containerBody}>
        <View style={styles.containerTop}>
          <TouchableOpacity
            style={styles.containerButton}
            onPress={onHandlerThapNhang}
            disabled={disabled}>
            <Image
              source={{uri: props.picture}}
              resizeMode="cover"
              style={styles.imagePhat}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconChat}>
            <Icon name="message" size={32} color={Color.Blue} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconQuestion}
            onPress={onHandlerButtonQuestion}>
            <Icon2 name="question" size={32} color={Color.Blue} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerBottom}>
          {stateNhang ? (
            <Animated.View
              style={[styles.containerNhang, {opacity: animationOpacity}]}>
              <Image
                source={require('../Image/khoi.gif')}
                resizeMode="contain"
                style={styles.gifL}
              />
              <Image
                source={require('../Image/khoi.gif')}
                resizeMode="contain"
                style={styles.gifM}
              />
              <Image
                source={require('../Image/khoi.gif')}
                resizeMode="contain"
                style={styles.gifR}
              />
              <Image
                source={require('../Image/nhang.png')}
                resizeMode="cover"
                style={styles.imageNhang}
              />
            </Animated.View>
          ) : (
            <Animated.View
              style={[styles.containerNhang, {opacity: animationOpacity}]}>
              <Image
                source={require('../Image/khoi.gif')}
                resizeMode="contain"
                style={styles.gifL}
              />
              <Image
                source={require('../Image/khoi.gif')}
                resizeMode="contain"
                style={styles.gifM}
              />
              <Image
                source={require('../Image/khoi.gif')}
                resizeMode="contain"
                style={styles.gifR}
              />
              <Image
                source={require('../Image/nhang.png')}
                resizeMode="cover"
                style={styles.imageNhang}
              />
            </Animated.View>
          )}
          <Image
            source={require('../Image/bathuong.png')}
            resizeMode="cover"
            style={styles.imageBatHuong}
          />
          <Image
            source={require('../Image/ban.png')}
            resizeMode="cover"
            style={styles.imageBan}
          />
          <TouchableOpacity
            style={styles.iconGarbage}
            onPress={onHandlerTakeOut}>
            {disabled ? (
              <Icon name="trash" size={42} color={Color.Black} />
            ) : null}
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Phat;
