import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableHighlight, View } from "react-native";

import Icon from "./Icon";
import styles from "./styles";

var IconTypeEnum = {
  ADD: 0,
  REMOVE: 1
};

const ListItem = (item, onPress) => (
  <View style={styles.row}>
    <Icon iconType={item.text === "" ? 0 : 1} onPress={onPress} />
    <Text style={styles.text}>{item.text}</Text>
  </View>
);

ListItem.propTypes = {
  item: PropTypes.string,
  onPress: PropTypes.func
};

export default ListItem;
