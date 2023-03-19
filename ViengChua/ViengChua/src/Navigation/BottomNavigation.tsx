import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../View/Home';
import Account from '../View/Account';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from './StackNavigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../Style/Color';
export type BottomParamList = {
  Home: undefined;
  Account: undefined;
};
const Bottom = createBottomTabNavigator<BottomParamList>();
const BottomNavigation = ({}: NativeStackScreenProps<
  StackParamList,
  'BottomNavigation'
>) => {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="home-assistant" size={32} color={Color.Brown} />
            ) : (
              <Icon name="home-assistant" size={26} color={Color.Black} />
            ),
        }}
      />
      <Bottom.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon name="card-account-details" size={32} color={Color.Brown} />
            ) : (
              <Icon name="card-account-details" size={26} color={Color.Black} />
            ),
        }}
      />
    </Bottom.Navigator>
  );
};
export default BottomNavigation;
