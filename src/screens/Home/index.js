import React, {useState, useEffect} from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

import api from '../../services/api';

import Tuple from '../../components/Tuple';



const Home = () => {

  const [addExpense, setAddExpense] = useState(2)
  const [editExpense, setEditExpense] = useState(0)
  const [removeExpense, setRemoveExpense] = useState(2)


  useEffect(() => {
    // função assíncrona utilizando axios para buscar dados da API Trivia DataBase
    async function loadApi() {
      const data = await api.get('expenses')
        .then(response => {
          console.log(response.data)
      });
       
    }
      
    // chama a função assíncrona
    loadApi();

  }, [removeExpense])


  function removerDespesa() {
    console.log(addExpense)
  }


  return(
    <View style={styles.container}>
      
      <Text style={styles.screenTitle}>Bem vindo!</Text>
      
      <View style={styles.table}>

        <Tuple onPress={() => removerDespesa()} value="2" title="a" date="20/03/21" />

      </View>
    
    </View>
  );
}

export default Home;