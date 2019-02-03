import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './Config/routes';
import store from './Config/store';

EStyleSheet.build({
  $lightRedColor: '#CF162C',
  $darkRedColor: '#4A0C13',
  $white: '#ffffff',
  $lightGray: '#dddddd'
});

export default () => (
  <Provider store={store}>
    <Navigator/>
  </Provider>
);
