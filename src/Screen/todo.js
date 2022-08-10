import React from 'react';
import { useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  View, 
  Image, 
  Text,
  Button,
} from 'react-native';

export default LoginScreen = () => {
   
const navigate = useNavigation()

setTimeout(() => {
    navigate.navigate("MainScreen")
}, 2500);

  return (
    <SafeAreaView style={styles.background}>
    <View>
         <Image style={styles.ImageLogo} source={require('../img/logo.png')}></Image>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background:{
    backgroundColor:'white',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  ImageLogo:{
    width: 350,
    height:150,
  }
});

