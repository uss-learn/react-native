import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Photo = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text  style={styles.text}>Photo</Text>
            <Button title={"Retour"} onPress={()=> {navigation.navigate('Home')}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 17,
    }

})

export default Photo;
