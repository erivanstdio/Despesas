import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Tuple = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}></Text>
      <Text style={styles.value}></Text>
    </View>
  );
}

export default Tuple;