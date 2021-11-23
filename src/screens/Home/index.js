import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

import Tuple from '../../components/Tuple';



const Home = () => {

  const [addExpense, setAddExpense] = useState(0)
  const [editExpense, setEditExpense] = useState(0)

  console.log(addExpense)

  function adicionarDespesa(value) {
    setAddExpense(value)
    console.log(addExpense)
  }

  return(
    <View style={styles.container}>
      
      <Text style={styles.screenTitle}>Bem vindo!</Text>
      
      <View style={styles.table}>

        <Tuple />

      </View>
    
    </View>
  );
}

export default Home;