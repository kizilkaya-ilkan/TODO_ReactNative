import React, { useEffect, useState } from 'react';
import { useNavigation} from '@react-navigation/native';


import {
  SafeAreaView,
  StyleSheet,
  View, 
  Image, 
  Text,
  Button,
  TextInput,
  Touchable,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';


export default LoginScreen = () => {
  
const navigate = useNavigation()

const [onText , setText] = useState("")
const [onMission , setMission] = useState([])

const [selectx,setSelect] = useState([]);

const HandleClink = () => {  // flat'list veri ekleme
setMission([...onMission, onText]);
setText("");
}

const Delete = (index) => {   // index Silme
  const newTasks = [...onMission];
  newTasks.splice(index,1);
  setMission(newTasks);
}

  return (
    <SafeAreaView style={styles.background}>
    <View style={{flex:1,margin:16}}>
     <Text style={styles.Text}>Notlarım</Text>
     <Text style={styles.TextInfo}>
Notlarınızı aşağıdaki metin kutusuna girin ve eklemek için "Ekle" düğmesine basın.</Text>
     <TextInput value={onText} onChangeText={setText}
     placeholder='Notlarım ....' style={styles.TextInput}/>
     <TouchableOpacity onPress={HandleClink}>
     <View style={styles.top}>
          <Text style={{fontSize: 18,
           color: "#fff",
           fontWeight: "bold",
           alignSelf: "center",
           textTransform: "uppercase"}}>Ekle</Text>
           </View>
     </TouchableOpacity>
     <View style={styles.divider}/>
     <FlatList style={styles.flat}
    data={onMission}
    renderItem={({item,index}) => (
    <View style={{marginTop:20,flexDirection:'column', justifyContent:'space-between'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>{item}</Text>
          <View style={{flexDirection:'row'}}>
             <TouchableOpacity onPress={(index)=>Delete(index)}
             style={styles.canceldelete}>              
                      <Text style={styles.cancel}>X</Text>
             </TouchableOpacity>
             <TouchableOpacity 
             onPress={setSelect(item)}>
                      <Image style={{width:20,height:20,marginLeft:30}} source={require('../img/click.png')}/>
             </TouchableOpacity>
             </View>
      </View>
        <View style={styles.divider}/>
    </View>
    )}
    keyExtractor = {item => item.id}/>
    </View>
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  flat:{
    margin:0,
    marginTop:0,
    marginBottom:0,
  },
  search:{
  padding:10,
  },
  searchInput:{
  fontSize:16,
  backgroundColor:'#f9f9f9',
  padding:10,
  },
  cancel:{
  fontSize:18,
  color:'white'
  },
  canceldelete:{
   backgroundColor:'red',
   borderRadius:13,
   width:23,
   height:23,
   justifyContent:'center',
   alignItems:'center'
  },
  background:{
    backgroundColor:'white',
    flex:1,
    justifyContent:'flex-start',
    alignItems:'flex-start'
  },
  divider:{
    marginTop:10,
    flexDirection:'column',
    height:1,
    backgroundColor: "#ddd"
  },
  top:{
    marginTop:15,
    marginLeft:60,
    marginRight:60,
    elevation: 18,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  Text:{
   color:"black",
   fontSize:30,
   fontWeight: "bold",
   fontFamily:'sans-serif'
  },
  TextInfo:{
    margin:0,
    color:"black",
    fontSize:20,
  },
  TextInput:{
    padding:16,
    marginTop:10,
    borderRadius:4,
    borderWidth:4,
    borderColor: "#ddd",
    fontSize:18,
  }
});

