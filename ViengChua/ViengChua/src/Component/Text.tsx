import React from 'react';
import {Text, TextStyle} from 'react-native';
export type text = {
  value?: string;
  textStyle?: TextStyle;
};
const TextView = (Props: text) => {
  return <Text style={Props.textStyle}>{Props.value}</Text>;
};
export default TextView;
