import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.bo}>
      <Text>My first React Native App</Text>
      <Text>Hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
  },
  bo: {
    backgroundColor: "lightblue",
    alignItems: "center",
    flex: 1,
  },
});
