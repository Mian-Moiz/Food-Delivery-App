import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Colors from '../Colors/Colors';
import styles from '../Styles/styles';
import Icon, { Icons } from '../Components/Icons';

const Button_Component = ({ onPress, text, buttonStyle, textStyle, iconType, iconName }) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle} activeOpacity={0.5}>
      <Icon
        type={iconType}
        name={iconName}
        color={Colors.white}
        size={24}
        
        
      />
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button_Component;
