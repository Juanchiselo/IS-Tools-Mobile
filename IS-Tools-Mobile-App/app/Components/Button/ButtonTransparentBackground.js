import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ButtonTransparentBackground = ({ buttonText, onPress}) => (
    <View>
        <TouchableHighlight
            style={styles.button}
            onPress={onPress}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableHighlight>
    </View>
    
);

ButtonTransparentBackground.propTypes = {
    buttonText: PropTypes.string,
    onPress: PropTypes.func,
};

export default ButtonTransparentBackground;