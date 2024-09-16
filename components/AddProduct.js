import React, {useEffect, useState} from 'react'
import {Modal, StyleSheet, TextInput, View} from "react-native";
import ButtonComponent from "./ButtonComponent";
import Input from "./Input";

const AddProduct = ({addProduct, displayModal, cancelProductForm}) => {
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
    const inputHandler = (value)=> {
        const regex = /[^a-z]/gi
        setProduct(value.replace(regex, ''))
        setProduct(value)
    };
    return (
        <Modal
            visible={displayModal}
            animationType={'slide'}
        >
            <View style={styles.inputContainer}>
                <Input
                    placeholder={'Nouveau produit'}
                    style={styles.textInput}
                    onChangeText={inputHandler}
                    value={product}
                    keyboardType="phone-pad"
                />
                <View style={styles.btnContainer}>
                    <View style={styles.btnBlue}>
                        <ButtonComponent
                            style={styles.btnBlue}
                            btnTitle={"Valider"}
                            onPressHandler={ handleClick }
                        />
                    </View>
                    <View style={styles.btnTomato}>
                        <ButtonComponent
                            style={styles.btnTomato}
                            btnTitle={"Annuler"}
                            onPressHandler={ cancelProductForm }
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    productModal: {
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    textInput: {
        borderColor: 'gray',
        padding: 5,
        borderWidth: 1,
        paddingLeft: 9,
        fontSize: 18,
        width: '100%',
        textAlign: 'center'
    },
    productItem: {
        backgroundColor: '#ffb6c1',
        padding: 20,
        fontSize: 17,
        marginVertical: 6,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,

    },
    btnBlue: {
        width: '45%',
        backgroundColor: 'seagreen',
        borderRadius: 6,
        alignItems: 'center',
    },
    btnTomato: {
        width: '45%',
        backgroundColor: 'tomato',
        borderRadius: 6,
        alignItems: 'center',

    }
})

export default AddProduct
