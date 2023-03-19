import React from 'react';
import {View, TouchableOpacity, ViewStyle, Text} from 'react-native';
import TextView, {text} from './Text';
import Icon from 'react-native-vector-icons/FontAwesome';

type HeaderBack = {
  viewStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  onPress?: () => void;
  nameIcon?: string | any;
  colorIcon?: string;
  sizeIcon?: number;
};
const Header = (Props: HeaderBack & text) => {
  return (
    <View style={Props.viewStyle}>
      <TouchableOpacity style={Props.buttonStyle} onPress={Props.onPress}>
        <Icon
          name={Props.nameIcon}
          color={Props.colorIcon}
          size={Props.sizeIcon}
        />
        <Text style={Props.textStyle}>{Props.value}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Header;
