import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import MaskContext from "./context";
import { Text, UIManager, View, findNodeHandle } from "react-native";
import widgetStyles from "./styles/widget";

export default function Widget(props) {
  const {} = useContext(MaskContext);
  const onLayout = (_layout) => {
    console.log(
      "𝔀𝔂𝔁.𝓼𝓬𝓸𝓽𝓽𝔀𝓾 ~ file: widget.tsx:9 ~ onLayout ~ _layout:",
      _layout
    );
  };
  const Child = React.cloneElement(props.children, {
    onLayout,
  });

  return <>{Child}</>;
}
