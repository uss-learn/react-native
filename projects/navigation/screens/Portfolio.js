import React, {Component, useLayoutEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Portfolio = ({navigation, route}) => {
    const user = route.params
    const [count, setCount] = useState(0);

    const updateCounter = (step) => {
        setCount(currentValue => Math.max(0, currentValue+(step)))
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: `${user.name} | Portfolio`,
            headerStyle: {
                backgroundColor: user.color,
            },
            headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => {updateCounter(-1)}}>
                        <Text style={{color: 'white', marginHorizontal: 5}}>-1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {updateCounter(1)}}>
                        <Text style={{color: 'white', marginHorizontal: 5}}>+1</Text>
                    </TouchableOpacity>
                </View>
            )
        });
    }, [navigation]);
    return (
        <View style={styles.container}>
            <Text>Portfolio </Text>
            <Text>Compteur {count}</Text>
            <Text>Name {user.name}</Text>
            <Text>Age {user.age}</Text>
            <Pressable style={({pressed})=> {
                return ({
                    backgroundColor:  pressed ? 'lightgreen' : 'rebeccapurple',
                    borderRadius: 25,
                    marginTop: 10,
                })
            }}
                       onPress={()=> {
                           navigation.navigate('Home')
                       }}
            >
                <Text style={styles.btn}>Vers Home</Text>
            </Pressable>
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

export default Portfolio;
