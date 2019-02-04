import React from "react";
import { TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";

const Icon = (iconType, onPress) => (
  <TouchableHighlight onPress={onPress}>
    <Ionicons
      name={iconType == 0 ? "ios-add" : "ios-remove"}
      size={32}
      color={iconType == 0 ? "green" : "red"}
    />
  </TouchableHighlight>
);

Icon.propTypes = {
  iconType: PropTypes.number,
  onPress: PropTypes.func
};

export default Icon;
