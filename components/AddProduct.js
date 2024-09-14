import React, {useState} from 'react'
import {Alert, Button, StyleSheet, TextInput, View} from "react-native";

const AddProduct = ({addProduct}) => {
    const [product, setProduct] = useState('');
    const handleClick = () => {
        if (product.length > 1) {
            addProduct(product); setProduct('')
        } else {
            Alert.alert('Info', 'Nombre de caractère doit être supérieur à 1', [
                {
                    text: 'COMPRIS',
                    onPress: () => console.warn('Réfusé'),
                    style: 'destructive',
                },
                {text: "D'ACCORD", onPress: () => console.warn('OK Pressed')},
                {text: 'ANNULÉ', onPress: () => console.warn('OK Pressed')},
            ],
                {cancelable: true, onDismiss: () => console.warn('dismissed')}
                )
        }

    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder={'Nouveau produit'}
                onChangeText={(value)=>setProduct(value)}
                value={product}
            />

            <Button
                title={"Valider"}
                onPress={ handleClick }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row'

    },
    textInput: {
        borderColor: 'gray',
        padding: 5,
        borderWidth: 1,
        paddingLeft: 9,
        fontSize: 18,
        flexGrow: 1
    },
    productItem: {
        backgroundColor: '#ffb6c1',
        padding: 20,
        fontSize: 17,
        marginVertical: 6,
    }
})

export default AddProduct
