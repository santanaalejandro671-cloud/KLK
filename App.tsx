import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MainCard from './MainCard';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <MainCard 
        title="¡Bienvenido a KLK!" 
        count={count} 
        onPress={() => setCount(count + 1)} 
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
  },
}); 