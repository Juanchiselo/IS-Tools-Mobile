import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';

const Logo = () => (
    <View style={styles.container}>
        <Image source={require('./Images/Logo.png')}
               resizeMode='contain'
               style={styles.containerImage}/>
    </View>
);

export default Logo;
