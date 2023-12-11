import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button({onPressFunction}) {

  return (
    <>
      <TouchableOpacity style={styles.button} 
        activeOpacity={0.5}
        onPress={onPressFunction}
        >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({ 
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  }
});