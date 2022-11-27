import { StatusBar } from "expo-status-bar";
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
import image from "./assets/icon.png";
export default function App() {
  const handlepress = () => {
    console.log("text clicked");
  };
  const press = () => {
    console.log("hello");
  };
  return (
    <>
      <View style={styles.bo}>
        <Text>My first React Native App</Text>
        <Text numberOfLines={1} onPress={handlepress}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
          similique ea obcaecati porro nulla? Ab quibusdam architecto voluptatum
          error eum iusto ratione exercitationem sit dolore tempora eligendi
          quas optio corrupti, fugiat alias consequatur? Harum, animi adipisci
          velit accusantium dolore ut ipsum illo nulla amet similique cum
          reiciendis autem, error nihil?
        </Text>
      </View>
      <view style={styles.container}>
        <Text>Image display</Text>
        <Image
          style={styles.image}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVD2_sPU0z5DfldQZWKZpdWL80hJIWdLnyVNeCQPSw&s",
          }}
        />
        <Button style={styles.btn} title="Click"></Button>
        <TouchableOpacity style={styles.btn} onPress={press}>
          <Text>TouchAbleOpacity</Text>
        </TouchableOpacity>
        <FlatList
          data={[
            { k: "Devin" },
            { k: "Dan" },
            { k: "Dominic" },
            { k: "Jackson" },
            { k: "James" },
            { k: "shorna" },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.k}</Text>}
        ></FlatList>
        <SectionList
          sections={[
            { title: "D", data: ["davin", "dan"] },
            { title: "k", data: ["shorna", "sanzina"] },
          ]}
          renderItem={({ item }) => <Text>{item}</Text>}
          renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
        />
      </view>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 500,
  },
  bo: {
    backgroundColor: "lightblue",
  },
  image: {
    height: "500px",
    width: "500px",
  },
  btn: {
    backgroundColor: "skyblue",
    marginTop: 10,
  },
});
