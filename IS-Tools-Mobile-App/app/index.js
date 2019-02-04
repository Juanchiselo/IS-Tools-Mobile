import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Provider } from "react-redux";

import Navigator from "./Config/routes";
import Store from "./Config/store";

EStyleSheet.build({
  $lightRedColor: "#CF162C",
  $darkRedColor: "#4A0C13",
  $white: "#ffffff",
  $lightGray: "#dddddd",
  $darkText: "#000000"
});

export default () => (
  <Provider store={Store}>
    <Navigator />
  </Provider>
);
