import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const LoginScreen = (props) => {
    return (
        <View style={style.container}>
            <Text>Login Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "lightgrey"

    }
})

export default LoginScreen