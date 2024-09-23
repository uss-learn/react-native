import React, {Component} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSelector} from "react-redux";

const Home = ({navigation}) => {
    const authUser = useSelector((state => state.users))
    console.log(authUser);

    let obj = {
        age: 28,
        name: "John Doe",
        color: 'royalblue'
    }
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Pressable style={({pressed})=> {
                return ({
                    backgroundColor:  pressed ? 'lightgreen' : 'rebeccapurple',
                    borderRadius: 25,
                    marginTop: 10,
                    })
                }}
                       onPress={()=> {
                           navigation.navigate('Portfolio', {
                               ...obj
                           })
                       }}
            >
                <Text style={styles.btn}>Vers Portfolio</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        color: 'black',
    },
    btn: {
        padding: 12,
        color: 'white',
    }
})

export default Home;
