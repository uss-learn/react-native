import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import Colors from "../constants/colors";

const Input = (props) => {
  const {placeholder, onChangeText, style, value} = props
    return (
        <TextInput
            {...props}
            style={{...styles.input, ...style}}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
        />
    );
}

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.secondary,
    borderWidth: 1,
    height: 55,
    marginVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 60,
  }
})

export default Input;
