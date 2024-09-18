import {NavigationContainer} from '@react-navigation/native';
import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";
import Drawer from "./routes/Drawer";
import HomeStackNavScreen from "./routes/HomeStackNav";
import PortfolioStackScreen from "./routes/PortfolioStackNav";
import {MaterialIcons} from "@expo/vector-icons";
import CustomerDrawerContent from "./components/CustomDrawerContent";

export default function App() {
  return (
      <NavigationContainer>
          <Drawer.Navigator
              drawerContent={(props) => <CustomerDrawerContent {...props} />}
          >
              <Drawer.Screen
                  name={'Home'}
                  component={HomeStackNavScreen}
                  options={{
                      title: "Accueil",
                      drawerIcon: () => (<MaterialIcons name="home" size={24} color="white"/>)
                  }}
              />
          </Drawer.Navigator>
      </NavigationContainer>
  );
}
