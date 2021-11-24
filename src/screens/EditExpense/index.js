import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';

import api from '../../services/api';
import Button from '../../components/Button';

import styles from './styles';

const EditExpense = ({navigation, route}) => {
  
  const { oldId, oldValue, oldDescription } = route.params
  
  const [value, setValue] = useState(0)
  const [description, setDescription] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  
  function submitEditExpense(valor, description, day, month, year) {
    api.put(`expenses/${oldId}`, {
      date: `${year}-${month}-${day}`,
      item: `${description}`,
      value: valor,
    }).then(res => {
      navigation.navigate("Home")
    }).catch(err => {
      alert('Revise os dados! \n Existe alguma informação inválida.')    
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar despesa:</Text>

      <View style={styles.inputBox}>
        <Text style={styles.text}>Qual o valor da despesa?</Text>
        <TextInput onChangeText={(text) => setValue(text)} keyboardType="numeric" style={styles.inputValue}>{oldValue}</TextInput>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.text}>Descrição da despesa:</Text>
        <TextInput onChangeText={(text) => setDescription(text)} style={styles.inputDescription}>{oldDescription}</TextInput>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.text}>A qual data se refere a despesa?</Text>
        <View style={styles.dateBox}>
          <View>
            <Text style={styles.dateText}>Dia</Text>
            <TextInput  placeholder="DD" maxLength={2} onChangeText={(text) => setDay(text)} keyboardType="numeric" style={styles.inputDate}>{day}</TextInput>
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

      <Button title="Editar" onPress={() => submitEditExpense(value, description, day, month, year)}/>
    </View>
  );
}

export default EditExpense;