import { createAppContainer, createStackNavigator } from "react-navigation";

import LoginScreen from "../Views/LoginScreen";
import MainMenuScreen from "../Views/MainMenuScreen";
import InventoryScreen from "../Views/InventoryScreen";
import CameraScreen from "../Views/CameraScreen";

const MainStack = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: () => null
    }
  },
  MainMenuScreen: {
    screen: MainMenuScreen
  },
  InventoryScreen: {
    screen: InventoryScreen
  }
});

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    CameraScreen: {
      screen: CameraScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default createAppContainer(RootStack);
