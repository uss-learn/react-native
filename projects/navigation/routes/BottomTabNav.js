import React, {Component} from 'react';
import {Text, View} from 'react-native';
import HomeStackNavScreen from "./HomeStackNav";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from "../screens/Settings";
import {MaterialIcons} from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                header: () => null,
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen
                name="Home" component={HomeStackNavScreen}
                options={{
                    title: "Accueil",
                    tabBarIcon: () => (<MaterialIcons name="home" size={24}/>)
                }}
            />
            <Tab.Screen
                name="Settings" component={Settings}
                options={{
                    title: "Paramèttre",
                    tabBarIcon: () => (<MaterialIcons name="settings" size={24}/>)
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNav;
