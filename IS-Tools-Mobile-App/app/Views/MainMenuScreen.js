import React, { Component } from 'react';
import { KeyboardAvoidingView, StatusBar, StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import Container from '../Components/Container';
import TextInputBottomBorder from '../Components/TextInput';
import ButtonTransparentBackground from '../Components/Button';


class MainMenuScreen extends Component {

    static propTypes = {
        navigation: PropTypes.object,
    };

    openInventoryScreen = () => {
        this.props.navigation.navigate('InventoryScreen');
    };

    render() {
        return (
            <Container>
                <StatusBar translucent={false}
                        barStyle="light-content"/>
                <ButtonTransparentBackground buttonText={'Inventory'}
                                                onPress={this.openInventoryScreen}/>
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

export default MainMenuScreen;