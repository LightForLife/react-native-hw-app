import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./img/main-bg.jpg")}
        resizeMode="stretch"
        style={styles.image}
      >
        <Text style={styles.title}>Войти</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeText}
          // value={text}
        />
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Адрес электронной почты"
          keyboardType="numeric"
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    height: 50,
    marginVertical: 16,
    marginHorizontal: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  title: {
    textAlign: "center",
    // fontWeight: 500,
    // fontSize: 30,
    // lineHeight: 35,
    // letterSpacing: "0.01",
    // color: "#212121",
  },
});
