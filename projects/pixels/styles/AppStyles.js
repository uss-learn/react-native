import {StyleSheet} from "react-native";
import {Colors} from "./Colors";

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 25,
        padding: 9,
        fontFamily: 'InriaSans_700Bold_Italic',

    },
    profileItem: {
        padding: 15,
        alignItems: 'center'
    },
    profileImage: {
        width: 350,
        height: 350,
        borderRadius: 14,

    },
    infoContainer: {
        flexDirection: 'row',
        paddingVertical: 20,
        width: "100%",
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    info: {
        fontSize: 20,
        fontFamily: 'InriaSans_300Light'
    },
    text: {
        fontSize: 17,
        fontFamily: 'InriaSans_400Regular'
    }

})
