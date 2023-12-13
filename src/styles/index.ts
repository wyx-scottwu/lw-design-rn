import { Dimensions, StyleSheet } from "react-native";
const scale = Dimensions.get('window').width / 375;

export function createStyle(styles) {
  return StyleSheet.create(styles)
}
export function scaleSize(px) {
  return px * scale;
}