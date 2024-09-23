import {createNativeStackNavigator,} from '@react-navigation/native-stack';
import Portfolio from "../screens/Portfolio";


const PortfolioStack = createNativeStackNavigator();


const PortfolioStackScreen = () => {
    return (
        <PortfolioStack.Navigator
        >
            <PortfolioStack.Screen name={'SPortfolio'} component={Portfolio} options={{
                title: 'Photos'
            }}/>
        </PortfolioStack.Navigator>
    )
}

export default PortfolioStackScreen;
