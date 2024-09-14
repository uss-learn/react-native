import React, {useState} from 'react'
import {
    Button,
    FlatList, Pressable,
    StyleSheet,
    Text,
    TextInput, TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";

const Product = ({product, deleteProduct}) => {
    return (
        <Pressable
            onPress={() => {
                deleteProduct(product)
            }}
            activeOpacity={0.4}
        >
            <View style={styles.productItems}>
                <Text style={styles.productItem}> {product.name} </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
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

export default Product
