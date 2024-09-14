import React, {useState} from 'react'
import {Button, FlatList, StyleSheet, Text, TextInput, View} from "react-native";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";

export default function App() {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        const key =  Date.now().toString()
        setProducts((currentProducts) => [{key, name: product},  ...currentProducts])
    }

    const deleteProduct = (product) => {
        setProducts((currentProducts) => {
            return currentProducts.filter(el => el.key !== product.key)
        })
    }

    return (
        <View style={styles.container}>
            <AddProduct addProduct={addProduct}/>
            <Products products={products} deleteProduct={deleteProduct}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 2,
        paddingVertical: 60,
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
