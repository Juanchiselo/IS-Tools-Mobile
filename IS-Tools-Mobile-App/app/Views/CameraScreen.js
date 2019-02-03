import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addScannedSerial } from '../Actions/Inventory';

class CameraScreen extends Component 
{
    static propTypes = {
        dispatch: PropTypes.func,
        serials: PropTypes.array,
    };

    state = 
    {
        hasCameraPermission: null,
    }
    
    handleBarCodeScanned = ({ type, data }) => 
    {
        if(!this.props.serials.includes(data))
          this.props.dispatch(addScannedSerial(data));
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

const mapStateToProps = (state) =>
{
    const serials = state.inventory.serials;

    return {
        serials,
    };
};


export default connect(mapStateToProps)(CameraScreen);