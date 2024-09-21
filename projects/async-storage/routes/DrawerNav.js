import {createDrawerNavigator} from "@react-navigation/drawer";
import CustomerDrawerContent from "../components/CustomDrawerContent";
import BottomTabNav from "./BottomTabNav";
import {MaterialIcons} from "@expo/vector-icons";


const DrawerNav = createDrawerNavigator();
const DrawerNave = () => {
    return (
        <DrawerNav.Navigator
            drawerContent={(props) => <CustomerDrawerContent {...props} />}
        >
            <DrawerNav.Screen
                name={'HomeNav'}
                component={BottomTabNav}
                options={{
                    title: "Accueil",
                    drawerIcon: () => (<MaterialIcons name="home" size={24} color="white"/>)
                }}
            />
        </DrawerNav.Navigator>
    )
}
export default DrawerNave
