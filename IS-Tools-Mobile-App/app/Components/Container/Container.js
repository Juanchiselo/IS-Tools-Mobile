import React from 'react';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo';

import styles from './styles';

const Container = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <LinearGradient
                colors={['#CF162C', '#4A0C13']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 1000,
                }}/>
            {children}
        </View>
    </TouchableWithoutFeedback>
);

Container.propTypes = {
    children: PropTypes.any,
};

export default Container;
