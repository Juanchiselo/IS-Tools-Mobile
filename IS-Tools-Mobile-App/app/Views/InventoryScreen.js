import React, { Component } from "react";
import { FlatList, StatusBar, Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import PropTypes from "prop-types";

import Container from "../Components/Container";
import ListItem from "../Components/List";
import { Separator } from "../Components/List";
import TextInputBottomBorder from "../Components/TextInput";
import ButtonTransparentBackground from "../Components/Button";
import { connect } from "react-redux";

class InventoryScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    serials: PropTypes.array
  };

  openCamera = () => {
    this.props.navigation.navigate("CameraScreen");
  };

  handlePress = () => {
    console.log("Row pressed");
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />

        <FlatList
          data={this.props.serials}
          renderItem={({ item }) => (
            <ListItem text={item} onPress={() => alert("Pressed")} />
          )}
          ItemSeparatorComponent={Separator}
          keyExtractor={item => item}
        />

        <ButtonTransparentBackground
          buttonText={"Scan QR Code"}
          onPress={this.openCamera}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const serials = state.inventory.serials;

  return {
    serials
  };
};

export default connect(mapStateToProps)(InventoryScreen);
