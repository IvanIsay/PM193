
/* ZONa1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React, {useState} from 'react';

//componente Propio Texto
const Texto= ()=>{
  const [contenido,setContenido]=useState('Hola Mundo')
  const actualizaTexto=()=>{setContenido('Estado modificado')}
  return(
    <Text onPress={actualizaTexto}> {contenido} </Text>
  )
}

/* ZONa2: Main */
export default function App() {
  return (

    <View style={styles.container}>

      <Texto > </Texto>
      <Texto >  </Texto>
      <Texto > </Texto>
      <Button title="Presionar"> </Button>
      <StatusBar style="auto" />

    </View>


  );
}


/* ZONa 3: Estilos- Estetica */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
