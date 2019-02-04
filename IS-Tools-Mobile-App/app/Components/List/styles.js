import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  row: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    color: "$white"
  },
  separator: {
    backgroundColor: "$white",
    flex: 1,
    height: StyleSheet.hairLineWidth
  }
});

export default styles;
