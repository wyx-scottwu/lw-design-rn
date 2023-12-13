import { useEffect } from "react";
import MaskContext from "./context";
import useMaskState from "./hook";
import { Text, View } from "react-native";

export default function MaskProvider(props) {
  const { state } = useMaskState();
 
  return (
    <MaskContext.Provider value={state}>{props.children}</MaskContext.Provider>
  );
}