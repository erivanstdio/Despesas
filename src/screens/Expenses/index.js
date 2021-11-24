import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './styles';

import api from '../../services/api';

import Tuple from '../../components/Tuple';
import Button from '../../components/Button';



const Expenses = ({navigation}) => {

  const [expenses, setExpenses] = useState([])
  
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    loadApi()
  }, [])
  
  
  async function loadApi() {
    if (loading) return;
    setLoading(true)
    const response = await api.get('expenses', { params: { page: 1, perPage: 20 } })
      
    setExpenses([...response.data])
    
    setLoading(false)
  }
  
  function removerDespesa(id) {
    api.delete(`expenses/${id}`).then(res => {
      loadApi()
    }).catch(err => {
      console.log(err)    
    });
  }


  function adicionarDespesa() {
    navigation.navigate('AddExpense');  
  }

  function editarDespesa(item) {
    navigation.navigate('EditExpense', {oldId: item._id, oldValue: item.value, oldDescription: item.item});  
  }


  return(
    <View style={styles.container}>
      
      <Text style={styles.screenTitle}>Despesas:</Text>
     
     <Button title="+" buttonTextStyle={{fontSize: 20}} buttonStyle={{marginTop: 20, marginBottom: 10}} onPress={() => adicionarDespesa()}/>

     { /*adicionar view pra fazer o post */ }
      <View style={styles.columnTitleBox}>
        <Text style={styles.columnTitle}>Valor</Text>
        <Text style={[styles.columnTitle, {right: 50}]}>Descrição</Text>
        <Text style={[styles.columnTitle, {right: 75}]}>Data</Text>
      </View>

      <View style={styles.table}>
      
        <FlatList
          style={styles.flatList}
          data={expenses}
          keyExtractor={ item => String(item._id)}
          renderItem={ ({item}) => <Tuple id={item._id} onPressRemove={() => removerDespesa(item._id)} onPress={() => editarDespesa(item)} value={item.value} title={item.item} date={item.date.substr(0,10)} />}
          ListFooterComponent={<Loading load={loading}/>}
        />  

      </View>
    
    </View>
  );
}

const Loading = ({ load }) => {
  if(!load) return null;
  return(
    <View style={{paddingVertical: 25}}>
      <ActivityIndicator size={25} color="#fff"/>
    </View>
  );
}


export default Expenses;