import React, {Component, useLayoutEffect} from 'react';
import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {globalStyle} from "../styles/AppStyles";
import {Colors} from "../styles/Colors";

import {MaterialIcons} from '@expo/vector-icons';
import {
    Divider,
    HeaderButton,
    HeaderButtons,
    HiddenItem, Item,
    OverflowMenu
} from "react-navigation-header-buttons/lib/module";
import MaterialIconHeader from "../components/MaterialIconHeader";





const Portfolio = ({navigation, route}) => {
    const person = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: `${person?.name} | ${person?.country}`,
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={MaterialIconHeader}>
                    <Item title="info" color={'white'} iconName="info" onPress={() => {
                        alert(`Portfolio de ${person?.name}`)
                    }}/>
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    return (
        <View style={globalStyle.container}>
            <Image
                source={{
                    uri: person?.img,
                }}
                style={globalStyle.profileImage}
            />

            <Text style={globalStyle.text}>{person?.name}</Text>
            <Text style={globalStyle.text}>{person?.country}</Text>
            <Text style={globalStyle.text}>{person?.totalImg}</Text>
            <Text style={globalStyle.text}>{person?.desc}</Text>
        </View>
    );
}
export default Portfolio;
