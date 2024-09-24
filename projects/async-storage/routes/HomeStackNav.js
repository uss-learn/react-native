import {createStackNavigator,} from '@react-navigation/stack';
import Home from "../screens/Home";
import Portfolio from "../screens/Portfolio";
import {MaterialIcons} from "@expo/vector-icons";
import Listes from "../screens/Listes";
import Signets from "../screens/Signets";
import Moments from "../screens/Moments";
import Sujets from "../screens/Sujets";
import Settings from "../screens/Settings";


const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                header: () => null,
            }}
        >
            <HomeStack.Screen
                name={'Homer'} component={Home}
                options={{
                    title: "Accueil"
                }}
            />
            <HomeStack.Screen name={'Profile'} component={Portfolio} options={{ title: "Profile" }}/>
            <HomeStack.Screen name={'Listes'} component={Listes} options={{ title: "Listes" }}/>
            <HomeStack.Screen name={'Sujets'} component={Sujets} options={{ title: "Sujets" }}/>
            <HomeStack.Screen name={'Signets'} component={Signets} options={{ title: "Signets" }}/>
            <HomeStack.Screen name={'Moments'} component={Moments} options={{ title: "Moments" }}/>
            <HomeStack.Screen name={'Settings'} component={Settings} options={{ title: "Settings" }}/>
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen;
