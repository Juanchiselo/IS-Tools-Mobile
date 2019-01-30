import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import PropTypes from 'prop-types';

class CameraScreen extends Component {
    state = {
        hasCameraPermission: null,
      }

      

      handleBarCodeScanned = ({ type, data }) => {
          this.props.navigation.state.params.addSerial(data);
        }
    
      async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
        }
    
      render() {

        const { hasCameraPermission } = this.state;
    
        if (hasCameraPermission === null) {
          return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
          return <Text>No access to camera</Text>;
        }
        return (
          <View style={{ flex: 1 }}>
            <BarCodeScanner
              onBarCodeScanned={this.handleBarCodeScanned}
              style={StyleSheet.absoluteFill}
            />
          </View>
        );
};
};

export default CameraScreen;