import { createAppContainer, createStackNavigator } from 'react-navigation';

import LoginScreen from '../Views/LoginScreen';
import InventoryScreen from '../Views/InventoryScreen';
import CameraScreen from '../Views/CameraScreen';
import MainMenuScreen from '../Views/MainMenuScreen';

const MainStack = createStackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            header: () => null,
        },
    },
    MainMenuScreen: {
        screen: MainMenuScreen,
    },
    InventoryScreen: {
        screen: InventoryScreen,
    },
});

const RootStack = createStackNavigator(
    {
      Main: {
        screen: MainStack,
      },
      CameraScreen: {
        screen: CameraScreen,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
  );

const App = createAppContainer(RootStack);

export default App;