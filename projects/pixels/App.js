import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
//SplashScreen.preventAutoHideAsync();
import {
    InriaSans_300Light,
    InriaSans_300Light_Italic,
    InriaSans_400Regular,
    InriaSans_400Regular_Italic,
    InriaSans_700Bold,
    InriaSans_700Bold_Italic,
    useFonts,
} from '@expo-google-fonts/inria-sans';
import Portfolio from "./screens/Portfolio";
import * as React from "react";
import {Colors} from "./styles/Colors";
import TabNav from "./routes/TabNav";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
//const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();



export default function App() {
  let [fontsLoaded] = useFonts({
    InriaSans_300Light,
    InriaSans_300Light_Italic,
    InriaSans_400Regular,
    InriaSans_400Regular_Italic,
    InriaSans_700Bold,
    InriaSans_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }


    {
        /*
        <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.lightBrown,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
      >
        <Stack.Screen
            name="Home" component={Home}
            options={({ route }) => ({
              title: "Accueil",
            })}
        />
        <Stack.Screen
            name="Portfolio" component={Portfolio}
            options={({ route }) => ({
              title: `${route.params.name} | Profile`,
            })}

        />
        <Stack.Screen name="Photo" component={Photo} />
      </Stack.Navigator>
    </NavigationContainer>
        *

        <NavigationContainer>
          <Drawer.Navigator
              initialRouteName="Home"
              screenOptions={{
                  drawerType: 'slide',
                  drawerWidth: 20,
                  drawerStyle: {
                      backgroundColor: '#c6cbef',
                      width: 150,
                  },
                  drawerLabelStyle: {
                      fontSize: 19,
                  },
                  drawerInactiveTintColor: 'gray',
                  drawerActiveTintColor: 'tomato',
              }}
          >
              <Drawer.Screen
                  name="Home" component={Home}
                  options={{
                      title: 'Accueil'
                  }}
              />
              <Drawer.Screen name="Photo" component={Photo} />
          </Drawer.Navigator>
      </NavigationContainer>


        */
    }
  return (
      <NavigationContainer>
          <TabNav/>
      </NavigationContainer>
  )
}
