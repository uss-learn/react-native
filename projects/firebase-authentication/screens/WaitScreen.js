import React, {Component} from 'react';
import {ActivityIndicator, Pressable, StyleSheet, Text, View} from 'react-native';
import {useSelector} from "react-redux";

const Wait = ({navigation}) => {
    const authUser = useSelector((state => state.users))
    console.log(authUser);

    let obj = {
        age: 28,
        name: "John Doe",
        color: 'royalblue'
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Patienter</Text>
            <ActivityIndicator
                size="large"
                color={"white"}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A91DA',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: '30'
    }
})

export default Wait;
