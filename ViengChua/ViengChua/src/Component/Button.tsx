import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';
type ButtonProps = {
  styleButton?: ViewStyle;
  textStyle?: TextStyle;
  text: String;
  disabled?: boolean;
  onPress: () => void;
  onLongPress?: () => void;
  sound?: boolean;
};
const Button = (Props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={Props.styleButton}
      onPress={Props.onPress}
      onLongPress={Props.onLongPress}
      disabled={Props.disabled}
      touchSoundDisabled={Props.sound}>
      <Text style={Props.textStyle}>{Props.text}</Text>
    </TouchableOpacity>
  );
};
export default Button;
