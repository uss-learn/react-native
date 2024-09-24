import React, {Component, useLayoutEffect} from 'react';
import {Button, FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {globalStyle} from "../styles/AppStyles";
import {DATA} from "../data";
import {Colors} from "../styles/Colors";
import PersonInfo from "../components/PersonInfo";
import {HeaderButtons, Item} from "react-navigation-header-buttons/lib/module";
import MaterialIconHeader from "../components/MaterialIconHeader";

const Home = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={MaterialIconHeader}>
                    <Item iconSize={30} title="menu" color={'gray'} iconName="menu" onPress={() => {
                        //navigation.toggleDrawer()
                    }}/>
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    return (
        <View style={globalStyle.container}>
            <FlatList
                data={DATA}
                keyExtractor={item=>item.id}
                renderItem={({item}) =>  <PersonInfo handleOnPressNavigate={()=> {
                    navigation.navigate('Portfolio', {
                        ...item
                    })
                }} item={item}/>}
            />
        </View>
    );
}
export default Home;
