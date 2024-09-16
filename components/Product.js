import React from 'react'
import {Pressable, StyleSheet, Text, View} from "react-native";
import {FontAwesome} from '@expo/vector-icons';
import Colors from "../constants/colors";

const Product = ({product, deleteProduct}) => {
    return (
        <View style={styles.productItems}>
                <Pressable

                    onPress={() => {
                        deleteProduct(product)
                    }}
                    activeOpacity={0.4}
                >
                    <Text>
                    <FontAwesome name="remove" size={24} color="white" />
                    </Text>
                </Pressable>
            <Text style={styles.productItem}> {product.name} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    productItems: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 10,
        padding: 15,
        backgroundColor: Colors.info,
    },

    productItem: {
        fontSize: 17,
        padding: 10,
        marginVertical: 6,
        color: Colors.white,
    }
})

export default Product
