import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image, ScrollView} from 'react-native';

import cow from './assets/cow.jpg'


const App = () => {
  const [state, setState] = useState('');
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.hello}>Hello World</Text>
        <TextInput
          style={styles.input}
          placeholder="entrer du texte"
          value={state}
          onChangeText={(value) => setState(value)}
        />
        <Image source={cow} style={styles.cow}/>
        <Image source={cow} style={styles.cow}/>
        <Image source={cow} style={styles.cow}/>
        <Image source={cow} style={styles.cow}/>
        <Image source={cow} style={styles.cow}/>
        <Image source={cow} style={styles.cow}/>
        <Image source={cow} style={styles.cow}/>
        <Image source={cow} style={styles.cow}/>
        <Image source={cow} style={styles.cow}/>
        <Image source={cow} style={styles.cow}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'green',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  hello: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    width: 200,
    height: 40,
    color: '#fff',
  },
  cow: {
    height: 150,
    width: 150,
    marginTop:10
  }
});

export default App;
