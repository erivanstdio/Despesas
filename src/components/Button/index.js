import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Button = ({ title, onPress, buttonStyle, buttonTextStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.buttonText, buttonTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;