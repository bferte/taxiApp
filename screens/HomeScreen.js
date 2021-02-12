import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HomeScreen = props => {
        useEffect(() => {
        console.log("celibataire =", props.route.params.celibataire);
        console.log("frameworks =", props.route.params.frameworks);
    }, [])
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
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

export default HomeScreen