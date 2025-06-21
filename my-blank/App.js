
/* ZONa1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React, {useState} from 'react';


//componente Propio Texto
const Texto= ({style})=>{
  const [contenido,setContenido]=useState('Hola Mundo')
  const actualizaTexto=()=>{setContenido('Estado modificado')}
  return(
    <Text style={[styles.text,style]} onPress={actualizaTexto}> {contenido} </Text>
  )
}

/* ZONa2: Main */
export default function App() {
  return (

    <View style={styles.container}>

      <Texto style={styles.azul} > </Texto>
      <Texto style={styles.verde}>  </Texto>
      <Texto style={styles.negro}> </Texto>


      <StatusBar style="auto" />

    </View>


  );
}


/* ZONa 3: Estilos- Estetica */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'strech',
    justifyContent: 'center',
  
  },
  text:{
    color:'white',
    fontSize:27,

  },
  azul:{backgroundColor:'blue'},
  verde:{backgroundColor:'green'},
  negro:{backgroundColor:'black'},
});
