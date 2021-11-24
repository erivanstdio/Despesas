import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import Button from '../../components/Button';

import styles from './styles';

const Home = ({navigation}) => {

  function handleNavigate() {
    navigation.navigate('Expenses')
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#009900"}/>
      <Text style={styles.text}>💸    Expenses    💸</Text>
      <Image style={styles.logo} source={require('../../assets/digital-wallet.png')} />
      <Button title="Despesas" onPress={handleNavigate}/>
    </View>
  );
}

export default Home;