import {StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function NameCard({ name }) {
  return (
        <TouchableOpacity style={styles.buttonName} activeOpacity={0.5}>
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity> 
  );
}

const styles = StyleSheet.create({ 
  name: {
    color: '#fff',
    padding: 10,
    fontSize: 18,
  },
  buttonName: {
    backgroundColor: '#1F1E25',
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  }
});