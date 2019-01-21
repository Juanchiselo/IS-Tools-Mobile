import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './Config/routes';

EStyleSheet.build({
  $lightRedColor: '#CF162C',
  $darkRedColor: '#4A0C13',
  $white: '#ffffff',
});

export default () => <Navigator/>;
