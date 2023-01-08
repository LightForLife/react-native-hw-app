import { StatusBar } from "expo-status-bar";
import LoginScreen from "./Screens/LoginScreen";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Platform,
} from "react-native";

export default function App() {
  console.log(Platform.OS);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./img/main-bg.jpg")}
        resizeMode="stretch"
        style={styles.image}
      >
        <LoginScreen />
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
    justifyContent: "flex-end",
  },
});
