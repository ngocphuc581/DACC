/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './Redux/Store';
import StackNavigation, {
  StackParamList,
} from './src/Navigation/StackNavigation';
import {CompositeScreenProps} from '@react-navigation/native';

import {BottomParamList} from './src/Navigation/BottomNavigation';
export type MainStackParamList = CompositeScreenProps<
  NativeStackScreenProps<StackParamList>,
  BottomTabScreenProps<BottomParamList>
>;
const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
};

export default App;
