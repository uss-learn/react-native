import React, {Component} from 'react';
import {Keyboard, Text, TouchableWithoutFeedback, View} from 'react-native';

const DismissKeyboard = ({children}) => {


    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}
        >
            { children}
        </TouchableWithoutFeedback>
    );
}

export default DismissKeyboard;
