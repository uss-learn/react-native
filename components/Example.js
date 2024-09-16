import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Example = () => {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.parentText}>
                <Text style={styles.text}>Text</Text>
            </Text>
            <View style={{flexDirection: 'row'}}>
                <Text>1</Text>
                <Text>2</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        width: '75%',
        backgroundColor: "#fff",
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    text: {
        color: 'blue'
    },
    parentText: {
        color: 'red',
    }
})

export default Example;
