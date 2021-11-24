import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './styles';

import api from '../../services/api';

import Tuple from '../../components/Tuple';



const Home = () => {

  const [expenses, setExpenses] = useState([])
  
  
  const [addExpense, setAddExpense] = useState(2)
  const [editExpense, setEditExpense] = useState(0)
  const [removeExpense, setRemoveExpense] = useState(2)

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    loadApi()
  }, [])
  
  
  async function loadApi() {
    if (loading) return;
    setLoading(true)
    const response = await api.get('expenses', { params: { page: 1, perPage: 20 } })
      
    setExpenses([...response.data])
    
    console.log(expenses)
    setLoading(false)
  }
  
  function removerDespesa() {
    console.log(addExpense)
    setAddExpense(addExpense+1)
  }

  return(
    <View style={styles.container}>
      
      <Text style={styles.screenTitle}>Bem vindo!</Text>
     
      <View style={styles.columnTitleBox}>
        <Text style={styles.columnTitle}>Valor</Text>
        <Text style={styles.columnTitle}>Descrição</Text>
        <Text style={[styles.columnTitle, {right: 75}]}>Data</Text>
      </View>

      <View style={styles.table}>
      
        <FlatList
          style={styles.flatList}
          contentContainerStyle={{ alignItems: 'center'}}
          data={expenses}
          keyExtractor={ item => String(item._id)}
          renderItem={ ({item}) => <Tuple onPress={() => removerDespesa()} value={item.value} title={item.item} date={item.date.substr(0,10)} />}
          onEndReached={loadApi}
          onEndReachedThreshold={0.2}
        />  

      </View>
    
    </View>
  );
}

const Loading = ({ load }) => {
  if(!load) return null;
  return(
    <View style={{paddingBottom: 25}}>
      <ActivityIndicator size={25} color="#fff"/>
    </View>
  );
}


export default Home;