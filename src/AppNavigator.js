// AppNavigator.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Screens/Splash';
import Cofee from './Components/Cofee';
/* import Login from './Screens/Login'; */

const Stack = createStackNavigator();

function AppNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator >
       {/*  <Stack.Screen name="Home" component={Splash} 
        options={{headerShown : false}}
        /> */}
        
        <Stack.Screen name="Cofee" component={Cofee} 
        options={{headerShown : false}}
        /> 
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

export default AppNavigator;
