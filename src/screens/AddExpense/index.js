import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';

import api from '../../services/api';
import Button from '../../components/Button';

import styles from './styles';

const AddExpense = ({navigation}) => {
  
  const [value, setValue] = useState(0)
  const [description, setDescription] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')


  
  function submitExpenseCerto() {
    console.log('entrou na function')
    api.post('expenses', {
      date: `20-03-20`,
      item: `dia bom pra pegar`,
      value: 20,
    }).then(res => {
      console.log(res)
      navigation.navigate("Expenses")
    }).catch(err => {
      console.log(err)    
    });
  }


  function submitExpense(valor, description, day, month, year) {
    api.post('expenses', {
      date: `${year}-${month}-${day}`,
      item: `${description}`,
      value: valor,
    }).then(res => {
      console.log(res)
      navigation.navigate("Home")
    }).catch(err => {
      console.log(err)    
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar nova despesa:</Text>

      <View style={styles.inputBox}>
        <Text style={styles.text}>Qual o valor da despesa?</Text>
        <TextInput onChangeText={(text) => setValue(text)} keyboardType="numeric" style={styles.inputValue}/>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.text}>Adicione uma descrição:</Text>
        <TextInput onChangeText={(text) => setDescription(text)} style={styles.inputDescription}/>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.text}>A qual data se refere a despesa?</Text>
        <View style={styles.dateBox}>
          <View>
            <Text style={styles.dateText}>Dia</Text>
            <TextInput  placeholder="DD" maxLength={2} onChangeText={(text) => setDay(text)} keyboardType="numeric" style={styles.inputDate}/>
          </View>
          <View>
            <Text style={styles.dateText}>Mês</Text>
            <TextInput placeholder="MM" maxLength={2} onChangeText={(text) => setMonth(text)} keyboardType="numeric" style={styles.inputDate}/>
          </View>
          <View>
            <Text style={styles.dateText}>Ano</Text>
            <TextInput placeholder="YYYY" maxLength={4} onChangeText={(text) => setYear(text)} keyboardType="numeric" style={styles.inputDate}/>
          </View>
        </View>
      </View>

      <Button title="Adicionar" onPress={() => submitExpense(value, description, day, month, year)}/>
    </View>
  );
}

export default AddExpense;