import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import TextView from '../Component/Text';
// import {BottomParamList} from '../Navigation/BottomNavigation';
import {StackParamList} from '../Navigation/StackNavigation';
import {styles} from '../Style/Home';

const Home = ({
  route,
  navigation,
}: BottomTabScreenProps<StackParamList, 'BottomNavigation'>) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image
          source={require('../Image/backgroundhome.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.containerBody}>
        <View style={styles.containerIconPhat}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CategoryPhat')}>
            <Image
              source={require('../Image/iconphat.png')}
              style={styles.iconPhat}
              resizeMode="cover"
            />
            <TextView value="Viếng phật" textStyle={styles.text} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerOrtherIcon}>
          <View style={styles.containerIconMo}>
            <TouchableOpacity
              style={styles.buttonOrtherIcon}
              onPress={() => navigation.navigate('GoMo')}>
              <Image
                source={require('../Image/moicon.png')}
                style={styles.iconPhat}
              />
              <TextView value="Gõ mõ" textStyle={styles.textOrtherIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.containerIconMo}>
            <TouchableOpacity
              style={styles.buttonOrtherIcon}
              onPress={() => navigation.navigate('TuTaiGia')}>
              <Image
                source={require('../Image/thienicon.png')}
                style={styles.iconPhat}
              />
              <TextView value="Tu tại gia" textStyle={styles.textOrtherIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.containerIconMo}>
            <TouchableOpacity
              style={styles.buttonOrtherIcon}
              onPress={() => navigation.navigate('CaDao')}>
              <Image
                source={require('../Image/bookicon.png')}
                style={styles.iconPhat}
              />
              <TextView value="Ca dao phật" textStyle={styles.textOrtherIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Home;
