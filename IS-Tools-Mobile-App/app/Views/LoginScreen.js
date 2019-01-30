import React, { Component } from 'react';
import { KeyboardAvoidingView, StatusBar, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

import Container from '../Components/Container';
import Logo from '../Components/Logo';
import TextInputBottomBorder from '../Components/TextInput';
import ButtonTransparentBackground from '../Components/Button';



// export default class App extends React.Component {

//     // Ecommerce app where we need to keep count of products selected.
//     constructor() {
//       // Always pass super.
//       super();
//       this.state = {
//         productCount: 0
//       };
//     }

//     addProduct = () => {
//         this.setState({'productCount':this.state.productCount + 1});
//     };
  
//     render() {
//       return (
//         <View style={styles.container}>
//           <SimpleButton onPress={this.addProduct}/>
//           <Text>{this.state.productCount}</Text>
//         </View>
//       );
//     }
//   }

export default class LoginScreen extends Component {

    static propTypes = {
        navigation: PropTypes.object,
    };

    login = () => {
        this.props.navigation.navigate('MainMenuScreen');
    };

    render() {
        return (
            <Container>
                <StatusBar translucent={false}
                           barStyle="light-content"/>
                <KeyboardAvoidingView behavior="padding">
                    <Logo/>
                    <TextInputBottomBorder placeholder={'Username'}/>
                    <TextInputBottomBorder placeholder={'Password'}
                                           secureTextEntry={true}/>
                </KeyboardAvoidingView>
                <ButtonTransparentBackground buttonText={'Login'}
                                             onPress={this.login}/>
                <Text style={styles.versionText}>v1.0</Text>
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
