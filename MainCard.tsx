import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface MainCardProps {
  loading: boolean;
  count: number;
  onPress: () => void;
}

export default function MainCard({ loading, count, onPress }: MainCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {loading ? 'Cargando...' : 'Contenido Listo!'}
      </Text>
      <Text style={styles.counter}>Contador: {count}</Text>
      
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Incrementar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  counter: {
    fontSize: 16,
    marginBottom: 12,
    color: '#666',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});