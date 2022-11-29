import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
  SectionList,
} from "react-native";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Test from "./Pages/Test";
export default function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, [user]);
  return (
    <>
      <Text style={styles.t}>ALL User Information</Text>
      <View style={styles.container}>
        {user.map((u) => (
          <Home u={u}></Home>
        ))}
      </View>
      <Footer></Footer>
      <Test></Test>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-between",
  },
  t: {
    textAlign: "center",
    fontSize: 50,
    color: "red",
  },
});
