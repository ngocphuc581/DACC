import React, {useState, useEffect} from 'react';
import {View, Image, FlatList} from 'react-native';
import TextView from '../Component/Text';
import {styles} from '../Style/CaDao';
import {Color} from '../Style/Color';
import {MainStackParamList} from '../../App';
import Header from '../Component/Header';
import {onHandlerGetCaDao} from '../API/CaDao_API';
const CaDao = ({navigation}: MainStackParamList) => {
  const [data, setData] = useState();
  useEffect(() => {
    onHandlerGetCaDao(setData);
  }, []);
  const onHandlerBack = (): void => {
    navigation.goBack();
  };
  const renderCaDao = (item, index) => {
    return (
      <View style={styles.containerItem}>
        <View style={styles.containerTitle}>
          <TextView
            value={`Ca dao ${index + 1}: `}
            textStyle={styles.textTitle}
          />
        </View>
        <View style={styles.containerContent}>
          <TextView
            value={`${item.paragraph1}`}
            textStyle={styles.textContent}
          />
          <TextView
            value={`${item.paragraph2}`}
            textStyle={styles.textContent}
          />
          {item.paragraph3 ? (
            <TextView
              value={`${item.paragraph3}`}
              textStyle={styles.textContent}
            />
          ) : null}
          {item.paragraph4 ? (
            <TextView
              value={`${item.paragraph4}`}
              textStyle={styles.textContent}
            />
          ) : null}
        </View>
      </View>
    );
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
      <FlatList
        data={data}
        renderItem={({item, index}) => renderCaDao(item, index)}
        style={styles.containerList}
      />
    </View>
  );
};
export default CaDao;
