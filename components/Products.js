import React, {useState} from 'react'
import {Button, FlatList, StyleSheet, Text, TextInput, View} from "react-native";
import Product from "./Product";

const Products = ({products, deleteProduct}) => {
    return (
        <View>
            <FlatList
                data={products}
                keyExtractor={(item, key) => key}
                renderItem={({item}) => <Product deleteProduct={deleteProduct} product={item}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
})

export default Products
