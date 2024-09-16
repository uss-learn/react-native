import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
    return (
        <View style={styles.headerWrapper}>
            <Text style={styles.logo}>
                My Shopping App
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: 'darkred',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 30,
        paddingTop: 50,
        paddingBottom: 15,

    },
    logo: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'JacquesFrancoisShadow_400Regular'
    },
})
export default Header;
