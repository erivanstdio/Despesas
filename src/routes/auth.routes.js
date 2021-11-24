import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Expenses from '../screens/Expenses';
import AddExpense from '../screens/AddExpense';
import EditExpense from '../screens/EditExpense';

const { Navigator, Screen } = createNativeStackNavigator();

const AuthRoutes = () => {
  return(
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen 
        name="Home"
        component={Home}
      />
      <Screen 
        name="Expenses"
        component={Expenses}
      />
      <Screen 
        name="AddExpense"
        component={AddExpense}
      />
      <Screen 
        name="EditExpense"
        component={EditExpense}
      />
    </Navigator>
  );
}

export default AuthRoutes;