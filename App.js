import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Text, View,TouchableHighlight, } from 'react-native';
import styles from './app.style.js';

export default function App() {
  const [all,setAll] = useState(0);
  const [car,setCar] = useState(0);
  const[truck,setTruck] = useState(0);
  function handleDelButton(){
    setAll(0);
    setCar(0);
    setTruck(0);
  }
  function addCarBtn(){
    setCar(car+1)
  }
  function addTruckBtn(){
    setTruck(truck+1)
  }
  function setAllBtn(){
    setAll(car+truck)
  }
  return (
    <View style={styles.container}>
      <Text>Forgalom számláló</Text>
      <TouchableHighlight 
          style={styles.runButton} 
          onPress={handleDelButton}>
        <Text style={styles.runText}>Mindent töröl</Text>
      </TouchableHighlight>

      <Text>{car}</Text>

      <TouchableHighlight 
          style={styles.runButton} 
          onPress={addCarBtn}>
        <Text style={styles.runText}>Személy</Text>
      </TouchableHighlight>
      

      <Text>{truck}</Text>

      <TouchableHighlight 
          style={styles.runButton} 
          onPress={addTruckBtn}>
        <Text style={styles.runText}>Teher</Text>
      </TouchableHighlight>

      <Text>{all}</Text>

      <TouchableHighlight 
          style={styles.runButton} 
          onPress={setAllBtn}>
        <Text style={styles.runText}>Összes</Text>
      </TouchableHighlight>

    </View>
    

  );
}