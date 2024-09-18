import {View, Easing} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,  } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";
import { CardStyleInterpolators } from '@react-navigation/stack';


const Stack = createNativeStackNavigator();

export default function App() {
    const openConfig = {
        animation: 'bounce',
        config: {
            stiffness: 1000,
            damping: 500,
            mass: 35,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        },
    };

    const closeConfig = {
        animation: 'timing',
        config: {
            duration: 10000,
            easing: Easing.ease,
        },
    };
  return (
      <NavigationContainer>
          <Stack.Navigator

              screenOptions={{
                  //header: () => {} initialRouteName={'Portfolio'}
                  headerStyle: {
                      backgroundColor: 'slateblue',
                  },
                  headerTintColor: 'white',
                  headerTitleStyle: {
                      fontWeight: 'bold',
                      textTransform: 'lowercase'
                  },
                  transitionSpec: {
                      open: openConfig,
                      close: closeConfig,
                  },
                  cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
              }}
          >
              <Stack.Screen name={'Home'} component={Home} options={{
                  title: 'Accueil'
              }}/>
              <Stack.Screen name={'Portfolio'} component={Portfolio}
                options={{
                    //header: () => {},
                    //gestureEnabled: true,
                    //gestureDirection: 'horizontal-invert',
                }}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
