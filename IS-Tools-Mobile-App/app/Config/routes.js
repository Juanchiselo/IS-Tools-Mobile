import { createAppContainer, createStackNavigator } from 'react-navigation';

import LoginScreen from '../Views/LoginScreen';
import InventoryScreen from '../Views/InventoryScreen';

const RootStack = createStackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            header: () => null,
        },
    },
    InventoryScreen: {
        screen: InventoryScreen,
    },
    CameraScreen: {
        screen: CameraScreen,
        navigationOptions: {
            header: () => null,
        },
    },
}, {
    mode: 'modal',
});

const App = createAppContainer(RootStack);

export default App;