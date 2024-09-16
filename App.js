import React from 'react'
import {StyleSheet, View} from "react-native";
import Example from "./components/Example";

export default function App() {

    return (
        <View style={styles.container}>
            <Example/>
            <Example/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        flex: 1,
        justifyContent: 'center', // par rapport à y (Horizontalement)
        alignItems: 'center', // par rapport à x (Verticalement)
    }

})
