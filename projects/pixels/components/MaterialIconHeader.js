import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {HeaderButton} from "react-navigation-header-buttons/lib/module";
import {MaterialIcons} from "@expo/vector-icons";



const MaterialIconHeader = (props) => (
    <HeaderButton IconComponent={MaterialIcons} iconSize={23} {...props} />
);

export default MaterialIconHeader
