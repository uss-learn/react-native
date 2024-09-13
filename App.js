import React from 'react'
import {View, Text, Button, StyleSheet} from "react-native";

const Person = ({name, age}) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTwo}>
                Je suis: {name} {age?`agé de ${age} ans`: ''}
            </Text>
        </View>
    );
};

export default function App() {
    const getNames = (firstname, secondName, lastname) => {
        return `${firstname} ${secondName} ${lastname}`
    }
    return (
        <View style={styles.wrapper}>
            <Person name={"Manitou"}/>
            <Person name={"Stan"}/>
            <Person name={"Steve"}/>
            <Person name={"Roger"} age={46}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 50,
        flexDirection: 'column'
    },
    viewOne: {backgroundColor: 'green'},
    textOne: {fontWeight: 'bold'},
    viewTwo: {backgroundColor: 'tomato'},
    textTwo: {fontSize: 20, fontWeight: 'bold', color: 'black'},
})
