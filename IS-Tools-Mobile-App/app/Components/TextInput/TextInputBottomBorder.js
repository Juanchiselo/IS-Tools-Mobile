import React from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const TextInputBottomBorder = ({ placeholder, secureTextEntry = false }) => (
    <View style={styles.container}>
        <TextInput placeholder={placeholder}
                   placeholderTextColor='#a3a3a3'
                   secureTextEntry={secureTextEntry}
                   style={styles.textInput}/>
    </View>
);

TextInputBottomBorder.propTypes = {
    placeholder: PropTypes.string,
    secureTextEntry: PropTypes.bool,
};

export default TextInputBottomBorder;