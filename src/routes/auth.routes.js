import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Expenses from '../screens/Expenses';

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
      
    </Navigator>
  );
}

export default AuthRoutes;