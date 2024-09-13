import React from 'react'
import {View, Text, Button, StyleSheet} from "react-native";

const Person = ({name, age, children}) => {
    return (
        <View>
            <Text style={styles.textTwo}>
                I'am {name} {age?` | age ${age}`: ''} | {children}
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
            <Person name={"Manitou"}> Alian</Person>
            <Person name={"Stan"}> Human</Person>
            <Person name={"Steve"}> Human</Person>
            <Person name={"Roger"} age={46}> Human</Person>
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
