import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../View/Login';
import BottomNavigation from './BottomNavigation';
import CategoryPhat from '../View/CategoryPhat';
import GoMo from '../View/GoMo';
import TuTaiGia from '../View/TuTaiGia';
import CaDao from '../View/CaDao';
import Phat from '../View/Phat';
export type StackParamList = {
  Login: undefined;
  BottomNavigation: undefined;
  CategoryPhat: undefined;
  GoMo: undefined;
  TuTaiGia: undefined;
  CaDao: undefined;
  Phat: undefined;
};
const Stack = createNativeStackNavigator<StackParamList>();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="CategoryPhat" component={CategoryPhat} />
        <Stack.Screen name="GoMo" component={GoMo} />
        <Stack.Screen name="TuTaiGia" component={TuTaiGia} />
        <Stack.Screen name="CaDao" component={CaDao} />
        <Stack.Screen name="Phat" component={Phat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
