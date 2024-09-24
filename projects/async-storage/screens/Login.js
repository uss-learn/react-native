import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';



const Login = ({navigation}) => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadUserInformation().then(()=> {
            setLoading(false)
        })
        // Démontage
        return () => {

        };
    }, [loading]);


    const onUserLogging = async () => {
        if (!firstname.length && !firstname.length) {
            Alert.alert('Info', "Veuillez indiquer votre nom et prénom")
            return
        }
        try {
            await AsyncStorage.setItem('user', JSON.stringify({firstname, lastname}))
            navigation.replace('HomeStack')
        } catch (error) {
            Alert.alert('Error', error)
        }
    }


    const loadUserInformation = async () => {
        try {
            const username = await AsyncStorage.getItem('user')
            if (username?.length) {
                navigation.replace('HomeStack')
            }
        } catch (error) {
            Alert.alert('Error', error)
        }
    }

    if (loading) {
        return null
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <AntDesign name="twitter" size={80} color={"white"}/>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Votre prénom"
                    onChangeText={(value)=> {setFirstName(value)}}
                    value={firstname}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Votre nom"
                    onChangeText={(value)=> {setLastName(value)}}
                    value={lastname}
                />

                <TouchableOpacity
                    style={styles.touchable}
                    onPress={onUserLogging}
                >
                    <View style={styles.btnContainer}>
                        <Text style={styles.btnText}>
                            Valider
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
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
    logo: {
        marginBottom: 50
    },
    inputContainer: {
      width: '100%',
      paddingHorizontal: 50
    },
    input: {
        backgroundColor: 'white',
        paddingVertical: 15,
        textAlign: 'center',
        borderRadius: 25,
        fontSize: 19,
        marginVertical: 5,
    },
    touchable: {
        marginVertical: 15,
    },
    btnText: {
        fontSize: 19,
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    btnContainer: {
        backgroundColor: 'turquoise',
        borderRadius: 20,
        padding: 15,
    }
})

export default Login;
