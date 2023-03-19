import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  Animated,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import TextView from '../Component/Text';
import {styles} from '../Style/TuTaiGia';
import {MainStackParamList} from '../../App';
import {Color} from '../Style/Color';
import Header from '../Component/Header';
import Button from '../Component/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Video from 'react-native-video';

const TuTaiGia = ({navigation}: MainStackParamList) => {
  const onHandlerBack = () => {
    navigation.goBack();
  };
  const [state, setState] = useState(true);
  const value2 = useRef(new Animated.Value(0)).current;
  const value3 = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef();
  const moveBall2 = () => {
    if (state) {
      Animated.timing(value2, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start();
      Animated.timing(value3, {
        toValue: 300,
        duration: 5000,
        useNativeDriver: true,
      }).start();
      setState(false);
    } else {
      Animated.timing(value2, {
        toValue: 0,
        duration: 5000,
        useNativeDriver: true,
      }).start();
      Animated.timing(value3, {
        toValue: 0,
        duration: 5000,
        useNativeDriver: true,
      }).start();
      setState(true);
    }
    // setTimeout(() => {
    //   for (let i = 0; i < 500000000; i++) {}
    // }, 1000);
  };
  let test = 0;
  const onHandlerScroll = event => {
    test = Math.round(event.nativeEvent.contentOffset.y / 100);
    console.log(test);
    if (test === 20) {
      scrollRef.current?.scrollTo({
        y: 0,
        animated: true,
      });
    }
  };
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
      {/* <View
        style={{
          height: '90%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            opacity: value2,
            transform: [{translateY: value3}],
            backgroundColor: Color.Red,
          }}></Animated.View>
        <TouchableOpacity onPress={moveBall2}>
          <TextView value="Click me !!!" />
        </TouchableOpacity>
      </View> */}
      <View
        style={{
          width: '100%',
          height: '60%',
          alignItems: 'center',
          backgroundColor: '#ddd',
        }}>
        <View
          style={{
            width: '90%',
            height: '100%',
            backgroundColor: Color.White,
            borderRadius: 10,
            marginTop: 5,
          }}>
          <ScrollView
            ref={scrollRef}
            pagingEnabled
            style={{}}
            decelerationRate={0}
            snapToInterval={140}
            snapToAlignment={'start'}
            scrollEventThrottle={16}
            onScroll={onHandlerScroll}
            onEnd>
            {items.map((item, index) => (
              <View
                key={index}
                style={{
                  width: '100%',
                  height: 100,
                  marginBottom: 40,
                  alignItems: 'center',
                  padding: 10,
                }}>
                <View
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 100,
                    backgroundColor: Color.Brown,
                    borderColor: Color.Brown,
                    borderWidth: 10,
                  }}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Color.White,
            borderRadius: 10,
          }}>
          <View style={styles.buttonSound}>
            <TextView
              value="Nhấn vào phía bên dưới để bật nhạc"
              textStyle={styles.textButtonSound}
            />
          </View>
          <View style={styles.buttonSound}>
            <TouchableOpacity
              onPress={() => setState(!state)}
              disabled={state == false ? false : true}>
              <Icon name="pause-circle" size={32} color={Color.White} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setState(!state)}
              disabled={state == true ? false : true}>
              <Icon name="play-circle" size={32} color={Color.White} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Video
        source={require('../Image/nhacphat.mp3')}
        audioOnly
        paused={state}
        currentPlaybackTime
      />
    </View>
  );
};

const items = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
  {
    id: 11,
  },
  {
    id: 12,
  },
  {
    id: 13,
  },
  {
    id: 14,
  },
  {
    id: 15,
  },
  {
    id: 16,
  },
  {
    id: 17,
  },
];

export default TuTaiGia;
