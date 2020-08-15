import { createStackNavigator } from 'react-navigation';
import Menu from './Screens/Menu'
import Home from './Home'

const AppNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Home: { screen: Home},
});