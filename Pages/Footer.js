import React from "react";
import { StyleSheet, Text } from "react-native";

const Footer = ({ P }) => {
  return (
    <>
      <Text style={styles.t}>{P}</Text>
    </>
  );
};
const styles = StyleSheet.create({
  //all text css
  t: {
    color: "red",
    fontSize: 20,
    fontWeight: 800,
    textAlignVertical: "center",
    textDecorationStyle: "dotted",
    textShadowColor: "black",
    textTransform: "uppercase",
    writingDirection: "rtl",
    textDecorationLine: "underline",
  },
});

export default Footer;
