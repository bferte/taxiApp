import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'


const { Navigator, Screen } = createStackNavigator()

const Root = () => (
  <Navigator>
    <Screen name="Home" component={HomeScreen}/>
    <Screen name="Profile" component={ProfileScreen} />
  </Navigator>
)


const App = () => {
  return (

    <NavigationContainer>
      <Navigator 
      screenOptions={(options) => {
            console.log('options', options)
            return { headerLeft: null,
                     title:options.route.name,
                     headerStyle: {
                       borderWidth: 3,
                       borderColor: "orange",
                       backgroundColor:"orange"
                     },
                     headerTintColor: "white",
                     headerTitleStyle: {
                       fontWeight: "bold"
                     },
                     
            
            }
          }}>
        <Screen name="Welcome" component={WelcomeScreen} />
        <Screen
          name="Login"
          component={LoginScreen}
          
        />
        <Screen 
          name="Root" 
          component={Root} 
          options={(options) => {
          //console.log("options", options)
          return {
            headerLeft: () => (
              <TouchableOpacity onPress={() => options.navigation.pop()}>
                <Text>Retour</Text>
              </TouchableOpacity>             
            )
            //headerShown : false
          }
        }} />
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
