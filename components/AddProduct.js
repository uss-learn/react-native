import React, {useEffect, useState} from 'react'
import {Alert, Button, StyleSheet, TextInput, View} from "react-native";

const AddProduct = ({addProduct}) => {
    const [product, setProduct] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        if (product?.length > 1) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }

    }, [product]);


    const handleClick = () => {
        addProduct(product);
        setProduct('')
        setButtonDisabled(true)
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder={'Nouveau produit'}
                onChangeText={(value)=>setProduct(value)}
                value={product}
                secureTextEntry={false}
                maxLength={2000}
                readOnly={false}
                rows={10}
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
        alignContent: 'top',

    },
    textInput: {
        borderColor: 'gray',
        padding: 5,
        borderWidth: 1,
        paddingLeft: 9,
        fontSize: 18,
        flexGrow: 1,
        marginBottom: 10,
        minHeight: 300,
    },
    productItem: {
        backgroundColor: '#ffb6c1',
        padding: 20,
        fontSize: 17,
        marginVertical: 6,
    }
})

export default AddProduct
