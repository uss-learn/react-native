import React, {useState} from 'react'
import {View, Text, Button, StyleSheet} from "react-native";

export default function App() {
    const [name, setName] = useState('Stan');
    const handlePress = () => {
        setName(name === 'John' ? 'Steve' : 'John')
    }
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTwo}>{name}</Text>
            <Button
            title={"Cliquer ici"}
            color={'red'}
            disabled={false}
            onPress={handlePress}
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
    textOne: {fontWeight: 'bold'},
    viewTwo: {backgroundColor: 'tomato'},
    textTwo: {fontSize: 20, fontWeight: 'bold', color: 'black'},
})
