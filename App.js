import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Modal } from 'react-native';
import {Calendars,Calendario} from './components'

export default function App() {
  const [open1, setOpen1]=useState(false)
  const [open2, setOpen2]=useState(false)
  return (
    <View style={styles.container}>
      <Button
      style ={styles.button} 
      title='Elegir fecha Calendars'
      onPress={()=>{
        setOpen1(!open1)
      }}
      />
      <Button
      style ={styles.button} 
      title='Elegir fecha Calendario'
      onPress={()=>{
        setOpen2(!open2)
      }}
      />

      <Modal 
        animationType='slide'
        transparent={true}
        visible={open1}
      >
        <View style={styles.center}>
        <View style={styles.modalView}>
        <Calendars/>
        <Button
        style ={styles.button} 
        title='Cerrar'
        onPress={()=>{
        setOpen1(!open1)
      }}
      />
        </View>
        </View>
      </Modal>
      <Modal 
        animationType='slide'
        transparent={true}
        visible={open2}
      >
        <View style={styles.center}>
        <View style={styles.modalView}>
        <Calendario/>
        <Button
        style ={styles.button} 
        title='Cerrar'
        onPress={()=>{
        setOpen2(!open2)
      }}
      />
        </View>
        </View>
      </Modal>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    padding:20,
    backgroundColor:'#fff',
  },
  center:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalView:{
    backgroundColor:'#fff',
    borderRadius:4,
    padding:20,
    shadowColor:'#000'
  }
});
