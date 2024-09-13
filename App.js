import React from 'react'
import {View, Text, Button, StyleSheet} from "react-native";

export default function App() {
    const getNames = (firstname, secondName, lastname) => {
        return `${firstname} ${secondName} ${lastname}`
    }
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textOne}>
                Je m'appelle {getNames('John', 'Doe', 'De la Funté')}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 50,
        flexDirection: 'column'
    },
    viewOne: {backgroundColor: 'green'},
    textOne: {fontFamily: 'Cochin', fontWeight: 'bold'},
    viewTwo: {backgroundColor: 'tomato'},
    textTwo: {fontFamily: 'Cochin', fontSize: 20, fontWeight: 'bold', color: 'white'},
})
