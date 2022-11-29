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
  t: {
    color: "red",
    fontSize: 20,
  },
});

export default Footer;
