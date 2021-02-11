import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const LoginScreen = props => {
    // useEffect(() => {
    //     console.log("nom =", props.route.params.nom);
    //     console.log("age =", props.route.params.age);

    // }, [])
    const goTo = () => {
        props.navigation.navigate("Root", {
            params: {},
            screen: "Profile"
        });
    }

    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <TouchableOpacity onPress={goTo}>
                <View style={styles.button}>
                    <Text>Aller à Home</Text>
                </View>
            </TouchableOpacity>           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "lightgrey"
    },
    button:{
        backgroundColor:"lightblue",
        borderColor:"darkblue",
        borderWidth: 2,
        justifyContent: "center",
        alignItems:"center",
        width: 100,
        height: 40

    }
})

export default LoginScreen