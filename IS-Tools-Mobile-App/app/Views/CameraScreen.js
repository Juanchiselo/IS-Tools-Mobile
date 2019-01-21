import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import { KeyboardAvoidingView, StatusBar, StyleSheet, Text, View } from 'react-native';

import Container from '../Components/Container';
import TextInputBottomBorder from '../Components/TextInput';
import ButtonTransparentBackground from '../Components/Button';

class CameraScreen extends Component {

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


export default CameraScreen;