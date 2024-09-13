import React, {useState} from 'react'
import {View, Text, Button, StyleSheet, TextInput} from "react-native";

export default function App() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTwo}>{name}</Text>
            <TextInput
                value={name}
                style={styles.input}
                placeholder={'Votre Nom'}
                onChangeText={(text) => setName(text)}
            />
            <Text style={styles.textTwo}>{age}</Text>
            <TextInput
                keyboardType={'numeric'}
                style={styles.input}
                placeholder={'Votre age'}
                onChangeText={(text) => setAge(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 50,
        flexDirection: 'column'
    },
    viewOne: {backgroundColor: 'green'},
    textOne: {fontWeight: 'bold', textAlign: 'center'},
    viewTwo: {backgroundColor: 'tomato'},
    textTwo: {fontSize: 20, fontWeight: 'bold', textAlign: 'center'},

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})
