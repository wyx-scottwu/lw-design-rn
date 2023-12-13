import React from "react";
import { Text, View } from "react-native";
import MaskProvider from "./provider";
import styles from "./styles";
import MaskWidget from "./widget";

export default function Mask() {
  return (
    <MaskProvider>
      <View style={styles.container}></View>
      <View style={styles.absContainer}></View>
      <MaskWidget>
        <View>
          <AsdsaChild>123215123</AsdsaChild>
        </View>
      </MaskWidget>
    </MaskProvider>
  );
}

function AsdsaChild(props) {
  console.log("𝔀𝔂𝔁.𝓼𝓬𝓸𝓽𝓽𝔀𝓾 ~ file: index.tsx:21 ~ AsdsaChild ~ props:", props)
  return (
    <Text>123213213</Text>
  )
}
Mask.Provider = MaskProvider
Mask.Widget = MaskWidget