import React, {useEffect, useLayoutEffect, useState} from 'react';
import {ActivityIndicator, Alert, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import {useDispatch} from "react-redux";
import {actionLogin, actionSignup} from "../redux/actions/actionsAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Wait from "./WaitScreen";


const Login = ({navigation}) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignup, setIsSignup] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false );
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (error) {
            Alert.alert("ERREUR", error, [
                {
                    text: "Ok"
                }
            ])
            setError('')
        }
        return () => {

        };
    }, [error]);

    useLayoutEffect(() => {
        loadUserInformation().then(() => {})
    }, []);

    const loadUserInformation =  async () => {
        const userDetails = await AsyncStorage.getItem('userDetails');

        if (!userDetails) {
            setIsAuth(true)
            return
        }

        const userObj = JSON.parse(userDetails)
        const { token, userId, dateTokenExpire} = userObj;
        const expireDate = new Date(dateTokenExpire)
        if (!token || !token || expireDate <= new Date()) {
            setIsAuth(true)
            return
        }
        navigation.navigate('HomeStack')
        setIsAuth(true)
    }


    const handleSubmit = async () => {
        if (!(email?.length && password?.length)) {
            Alert.alert('Information', 'Veuillez remplir tous les champs')
            return
        }
        setIsLoading(true)
        if (isSignup) {
            try {
                await dispatch(actionSignup({email, password}))
                navigation.navigate('HomeStack')
            } catch (err) {
                setError(err.message)
                setIsLoading(false)
            }
        } else {
            try {
                await dispatch(actionLogin({email, password}))
                navigation.navigate('HomeStack')
            } catch (err) {
                setError(err.message)
                setIsLoading(false)
            }
        }
    }

    if (!isAuth) {
        return <Wait/>
    }

    return (
        <LinearGradient
            colors={['#1A91DA', '#ffffff']}
            style={styles.container}
        >
            <View style={styles.logo}>
                {
                    !isLoading ? (
                        <AntDesign name="twitter" size={80} color={"white"}/>
                    ) : (
                        <View>
                            <Text style={styles.text}> Patientez... </Text>
                            <ActivityIndicator
                                size={80}
                                color={'#ffffff'}
                            />
                        </View>
                    )
                }
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.text}>
                    {isSignup ? 'Inscription' : "Connexion"}
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Votre Email"
                    onChangeText={(value)=> {setEmail(value)}}
                    value={email}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Votre mot de passe"
                    secureTextEntry={true}
                    onChangeText={(value)=> {setPassword(value)}}
                    value={password}
                />

                <TouchableOpacity
                    style={styles.touchable}
                    onPress={handleSubmit}
                    disable={isLoading}
                >
                    <View style={styles.btnContainer}>
                        <Text style={styles.btnText}>
                            Valider
                        </Text>
                    </View>
                </TouchableOpacity>

                <Pressable
                    onPress={()=> setIsSignup(prevState=> !prevState)}
                >
                    <View>
                        <Text style={{textAlign: 'center', marginTop: 9}}>
                            {isSignup ? 'Se connecter' : "S'inscrire"}
                        </Text>
                    </View>
                </Pressable>
            </View>
        </LinearGradient>
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
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    }
})

export default Login;
