import React, { Component } from 'react';
import { KeyboardAvoidingView, StatusBar, StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import Container from '../Components/Container';
import TextInputBottomBorder from '../Components/TextInput';
import ButtonTransparentBackground from '../Components/Button';


class InventoryScreen extends Component {

    static propTypes = {
        navigation: PropTypes.object,
    };

    constructor() {
        super();
        this.state = {
            serials: []
        };
    };

    openCamera = () => {
        this.props.navigation.navigate('CameraScreen', {addSerial: this.addSerial.bind(this)});
    };

    addSerial(serial) {
        this.setState(serials.push(serial));
        alert(serials);
    };

    render() {
        return (
            <Container>
                <StatusBar translucent={false}
                        barStyle="light-content"/>

                <ButtonTransparentBackground buttonText={'Scan QR Code'}
                                             onPress={this.openCamera}/>
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