import React, {Component} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {Colors} from "../styles/Colors";
import {globalStyle} from "../styles/AppStyles";

const PersonInfo = ({item, handleOnPressNavigate}) => {
    return (
        <Pressable
            onPress={handleOnPressNavigate}
            style={({pressed})=> [{backgroundColor: pressed ? Colors.clicked : Colors.white}, globalStyle.profileItem]}
        >
            <Text style={globalStyle.titleText}>{item.name}</Text>
            <Image
                source={{
                    uri: item.img,
                }}
                style={globalStyle.profileImage}
            />

            <View style={globalStyle.infoContainer}>
                <Text style={globalStyle.info}>{item.country}</Text>
                <Text style={globalStyle.info}>{item.totalImg}</Text>
            </View>
        </Pressable>
    );
}

export default PersonInfo;
