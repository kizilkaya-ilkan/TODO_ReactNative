import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import todo from './src/Screen/todo';
import main from './src/Screen/main';

const Stack = createNativeStackNavigator()

const App= () =>{
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={todo} options={{
        headerShown:false
      }}/>
      <Stack.Screen name="MainScreen" component={main} options={{
        headerShown:false
      }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
