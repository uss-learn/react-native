import {NavigationContainer} from '@react-navigation/native';
import DrawerNav from "./routes/DrawerNav";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "./screens/Login";
import {Provider} from "react-redux";
import store from "./redux/store";

const Stack = createStackNavigator()
export default function App() {
  return (
      <Provider store={store}>
          <NavigationContainer>
              <Stack.Navigator
                  intialRouteName={"Login"}
              >
                  <Stack.Screen name="Login" component={Login} options={{title: "Connexion", headerShown: false}}/>
                  <Stack.Screen name="HomeStack" component={DrawerNav} options={{title: "Accueil", headerShown: false}}/>
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
}
