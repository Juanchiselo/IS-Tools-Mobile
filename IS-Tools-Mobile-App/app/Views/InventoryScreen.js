import React, { Component } from 'react';
import { KeyboardAvoidingView, StatusBar, StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Container from '../Components/Container';
import TextInputBottomBorder from '../Components/TextInput';
import ButtonTransparentBackground from '../Components/Button';

class InventoryScreen extends Component {

    login = () => {
        alert('Logging in!');
    };

    render() {
        return (
            <Container>
                <StatusBar translucent={false}
                        barStyle="light-content"/>
                <ButtonTransparentBackground buttonText={'Scan QR Code'}
                                                onPress={this.login}/>
            </Container>
        );
    };
};

const styles = EStyleSheet.create({
    versionText: {
        color: '$white',
        margin: 30,
    },
});

export default InventoryScreen;