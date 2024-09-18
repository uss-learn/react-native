import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Signets = () => {
    return (
        <View style={styles.container}>
            <Text>Signets </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        color: 'white',
    },
    btn: {
        padding: 12,
        color: 'white',
    }
})

export default Signets;
