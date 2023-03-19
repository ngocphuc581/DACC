import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import {User} from './Login';
import TextView from '../Component/Text';
import {styles} from '../Style/CategoryPhat';
import {Color} from '../Style/Color';
import Header from '../Component/Header';
import {MainStackParamList} from '../../App';
import {
  onHandlerGetLevelPhapDanh,
  onHandlerGetPhat,
  onHandlerInsertUser,
} from '../API/Category_API';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
const {width: widthScreen} = Dimensions.get('window');
const {height: heightScreen} = Dimensions.get('window');
export type PhatProps = {
  _id: string;
  name: string;
  picture: string;
  point: number;
  AccountList: [
    {
      id_User: string;
    },
  ];
};

const renderPhat = (props: PhatProps, user, setData, dispatch, navigation) => {
  const onHandlerCheck = () => {
    if (props.AccountList == '') {
      Alert.alert('Failed', 'Chưa nhận Skin này, bạn muốn sở hữu chứ?', [
        {
          text: 'Có',
          onPress: () => {
            if (props.point <= user.point) {
              onHandlerGetLevelPhapDanh(
                user.id_User,
                user.level + 1,
                props._id,
                setData,
                dispatch,
              );
            } else {
              ToastAndroid.show(
                'Bạn không đủ điểm để sở hữu Skin',
                ToastAndroid.SHORT,
              );
            }
          },
        },
        {
          text: 'Không',
          onPress: () => {},
        },
      ]);
    } else {
      const array = props.AccountList.map(item => item.id_User);
      const check = array.includes(user.id_User);
      if (check == true) {
        navigation.navigate('Phat', {props});
      } else {
        Alert.alert('Failed', 'Chưa nhận Skin này, bạn muốn sở hữu chứ?', [
          {
            text: 'Có',
            onPress: () => {
              if (props.point <= user.point) {
                onHandlerGetLevelPhapDanh(
                  user.id_User,
                  user.level + 1,
                  props._id,
                  setData,
                  dispatch,
                );
              } else {
                ToastAndroid.show(
                  'Bạn không đủ điểm để sở hữu Skin',
                  ToastAndroid.SHORT,
                );
              }
            },
          },
          {
            text: 'Không',
            onPress: () => {},
          },
        ]);
      }
    }
  };
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#86442d',
        height: heightScreen - 500,
        width: '50%',
        marginRight: 10,
        marginBottom: 5,
        padding: 7,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onHandlerCheck}>
      {props.AccountList.map((item, index) =>
        item.id_User === user.id_User ? (
          <View style={{height: '100%', width: '100%'}} key={index}>
            <Image
              source={{uri: props.picture}}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        ) : null,
      )}
    </TouchableOpacity>
  );
};
const CategoryPhat = ({navigation}: MainStackParamList) => {
  const [data, setData] = useState();
  const user = useSelector(state => state.User);
  const dispatch = useDispatch();
  const onHandlerBack = () => {
    navigation.goBack();
  };
  useEffect(() => {
    onHandlerGetPhat(setData);
  }, []);
  return (
    <View style={styles.container}>
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
      <View style={styles.listItem}>
        <FlatList
          data={data}
          renderItem={({item}) =>
            renderPhat(item, user, setData, dispatch, navigation)
          }
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
        {/* <View
          style={{
            backgroundColor: '#86442d',
            height: '30%',
            width: '50%',
            marginRight: 10,
            padding: 7,
          }}>
          <Image
            source={{uri: 'https://i.postimg.cc/63b1X1Fr/15.jpg'}}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View
          style={{
            backgroundColor: '#86442d',
            height: '30%',
            width: '50%',
            marginLeft: 10,
            padding: 7,
          }}>
          <Image
            source={{
              uri: 'https://i.postimg.cc/1X5npvzj/44635004335-1a7d21c194-k.jpg',
            }}
            style={{width: '100%', height: '100%'}}
          />
        </View> */}
      </View>
    </View>
  );
};
export default CategoryPhat;
