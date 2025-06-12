
/* ZONa1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';


const Texto= (props)=>{
  const {contenido}=props
  return(
    <Text> {contenido} </Text>
  )
}

/* ZONa2: Main */
export default function App() {
  return (

    <View style={styles.container}>

      <Texto contenido="Hola"> </Texto>
      <Texto contenido="Mundo"> </Texto>
      <Texto contenido="ReactNative"> </Texto>
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
