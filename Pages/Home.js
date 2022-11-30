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
  //view css
  h: {
    width: 200,
    backgroundColor: "lightblue",
    marginTop: 20,
    padding: 20,
    borderColor: "red",
    borderRadius: 20,
    borderWidth: 4,
    opacity: 2,
    shadowColor: "black",
    shadowRadius: 20,
    shadowOpacity: 20,
  },
});

export default Home;
