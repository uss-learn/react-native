import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Pressable, TouchableOpacity} from 'react-native';

const ButtonComponent = ({btnTitle, onPressHandler, style}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={onPressHandler}
        >
            <View style={{...styles.btn, ...style}}>
                <Text style={styles.btnText}>
                    {btnTitle}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "gray",
        paddingVertical: 9,
    },
    btnText: {
        color: '#fff',
        fontSize: 17,
    }
})

export default ButtonComponent;
