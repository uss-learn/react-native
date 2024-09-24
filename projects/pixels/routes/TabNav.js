import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Portfolio from "../screens/Portfolio";
import Home from "../screens/Home";
import Photo from "../screens/Photo";
import StackNav from "./StackNav";

const Tab = createMaterialBottomTabNavigator();

function TabNav() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#e91e63"
            barStyle={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen
                name="Feed"
                component={StackNav}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Photo"
                component={Photo}
                options={{
                    tabBarLabel: 'Gallery',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNav
