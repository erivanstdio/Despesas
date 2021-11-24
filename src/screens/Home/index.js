import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';

import styles from './styles';

const Home = ({navigation}) => {

  function handleNavigate() {
    navigation.navigate('Expenses')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Centralizado</Text>
      <Button title="Despesas" onPress={handleNavigate}/>
    </View>
  );
}

export default Home;