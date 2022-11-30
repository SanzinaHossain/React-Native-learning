import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Footer from "./Footer";

const Home = ({ u }) => {
  const { id, title } = u;
  const P = "hello";
  return (
    <View style={style.h}>
      <Text>id: {id}</Text>
      <Text>{title}</Text>
      <Footer P={P}></Footer>
    </View>
  );
};
const style = StyleSheet.create({
  h: {
    width: 200,
    backgroundColor: "lightblue",
    marginTop: 20,
    padding: 20,
    fontVariant: "small-caps",
  },
});

export default Home;
