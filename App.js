import React, {useState} from 'react'
import {Button, FlatList, StyleSheet, Text, TextInput, View} from "react-native";

export default function App() {
    const [product, setProduct] = useState('');
    const [products, setProducts] = useState([]);
    const addProduct = () => {
        setProducts((currentProducts) => [...currentProducts, product])
        setProduct('')
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Nouveau produit'}
                    onChangeText={(value)=>setProduct(value)}
                    value={product}
                />

                <Button
                    title={"Valider"}
                    onPress={addProduct}
                />
            </View>
            <View style={styles.productItems}>
                {
                    [].map((product, key) => (
                        <Text style={styles.productItem} key={key}> {product} </Text>
                    ))
                }

                <FlatList
                    data={products}
                    keyExtractor={(item, key) => key}
                    renderItem={({item}) => <Text style={styles.productItem}> {item} </Text>}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 2,
        paddingVertical: 60,
    },
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
    productItems: {
        marginTop: 10,
    },
    productItem: {
        backgroundColor: '#ffb6c1',
        padding: 20,
        fontSize: 17,
        marginVertical: 6,
    }
})
