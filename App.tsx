import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import MainCard from './MainCard';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  // Variables con tus datos personales
  const nombre = "Alexandro Josue";
  const apellido = "Santana";

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>KLK App</Text>
      
      <Text style={styles.subtitle}>
        Hello World by {nombre} {apellido}
      </Text>

      <MainCard 
        loading={loading} 
        count={count} 
        onPress={() => setCount(count + 1)} 
      />

      <Button 
        title={loading ? "Mostrar" : "Cargar"} 
        onPress={() => setLoading(!loading)} 
      />

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
    padding: 20,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
});