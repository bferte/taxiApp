import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native' 
import { createStackNavigator } from '@react-navigation/stack'

import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'

const {Navigator, Screen} = createStackNavigator()

const Root = () => (
  <Navigator>
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Profile" component={ProfileScreen} />
  </Navigator>
)


const App = () => {
  return (
      
    <NavigationContainer>
      <Navigator>
        <Screen name="Welcome" component={WelcomeScreen} />
        <Screen name="Login" component={LoginScreen} />
        <Screen name="Root" component={Root} />
      </Navigator>
    </NavigationContainer>

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
  }
});

export default App;
