import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import api from '../../services/api';

import styles from './styles';

const Tuple = ({id, title, value, date, onPress, onPressRemove}) => {


  function removerDespesa(id) {
    api.delete(`expenses/${id}`).then(res => {
    }).catch(err => {
      console.log(err)    
    });
  }


  return (
      <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.value}>
      <Text style={styles.text}>{value}</Text>
      </View>
      <View style={styles.title}>
      <Text style={styles.text2}>{title}</Text>
      </View>
      <View style={styles.date}>
      <Text style={styles.text}>{date}</Text>
      </View>
      
          <TouchableOpacity onPress={onPressRemove} style={styles.buttonBox}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
  );
}

export default Tuple;