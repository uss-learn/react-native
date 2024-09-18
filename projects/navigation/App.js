import {NavigationContainer} from '@react-navigation/native';
import Home from "./screens/Home";
import Drawer from "./routes/Drawer";
import HomeStackNavScreen from "./routes/HomeStackNav";
import {MaterialIcons} from "@expo/vector-icons";
import CustomerDrawerContent from "./components/CustomDrawerContent";
import BottomTabNav from "./routes/BottomTabNav";

export default function App() {
  return (
      <NavigationContainer>
          <Drawer.Navigator
              drawerContent={(props) => <CustomerDrawerContent {...props} />}
          >
              <Drawer.Screen
                  name={'HomeNav'}
                  component={BottomTabNav}
                  options={{
                      title: "Accueil",
                      drawerIcon: () => (<MaterialIcons name="home" size={24} color="white"/>)
                  }}
              />
          </Drawer.Navigator>
      </NavigationContainer>
  );
}
