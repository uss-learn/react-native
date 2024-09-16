import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

const Person = ({person}) => {

    return (
        <View style={styles.personCard}>
            <Text style={styles.personText}>Nom: { person.name } | Age: { person.age } </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    personCard: {
        padding: 10,
        backgroundColor: 'deepskyblue',
        marginHorizontal: 8,
        justifyContent: 'center'
    },
    personText: {
        color: 'white',
        fontSize: 50,
        textAlign: 'center'
    }
})

export default Person;
