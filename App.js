import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const {all,setAll} = useState(0);
  return (
    <View style={styles.container}>
      <Text>Forgalom számláló</Text>
      <TouchableHighlight 
          style={styles.runButton} 
          onPress={handleDelButton}>
        <Text style={styles.runText}>Mindent töröl</Text>
      </TouchableHighlight>

      <Text>Összes: {all}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
