import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, 
         StyleSheet,
         Text,
         SafeAreaView,
         TextInput,
        //  ScrollView,
         FlatList,} from 'react-native';


import Button from '../components/Button';
import NameCard from '../components/NameCard';

export default function App() {
  const [nome, setNome] = useState('');
  const [nomes, setNomes] = useState([]);

  function handleAddClick() {
      setNomes([...nomes, nome]);
  }

  return (
    <>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bem Vindo ao primero app</Text>
      <TextInput style={styles.input} 
        placeholder="Digite seu nome" 
        placeholderTextColor='#555'
        onChangeText={setNome} />
        <Button onPressFunction={handleAddClick}/>
      <Text style={[styles.title, {marginTop:20}]}>Nomes Salvos</Text>

      <FlatList data={nome} keyExtractor={item => item} renderItem={({item})=> (
        <NameCard name={item}/>
      )} /> 

      {/* apenas quando a lista é pequena */}
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {nomes.map((nome, i) => (
            <NameCard key={i} name={nome}/>
        ))}
      </ScrollView> */}
      <StatusBar style="auto" />
    </SafeAreaView> 
    </>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#121015',
    padding: 25,
    marginTop: Platform.OS === 'android' ? 35 : 0,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  name: {
    color: '#fff',
    padding: 10,
    fontSize: 18,
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
});