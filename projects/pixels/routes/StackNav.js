import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Portfolio from "../screens/Portfolio";
import Photo from "../screens/Photo";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

function StackNav() {
    return (
        <Stack.Navigator
        >
            <Stack.Screen
                name="Home" component={Home}
            />
            <Stack.Screen
                name="Portfolio" component={Portfolio}
                options={({ route }) => ({
                    title: `${route.params?.name} | Profile`,
                })}
            />
        </Stack.Navigator>
    );
}

export default StackNav;
