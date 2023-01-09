import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Button,
  Linking,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  isShowKeyboard,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => setName(e);
  const handleEmail = (e) => setEmail(e);
  const handlePassword = (e) => setPassword(e);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(`{email: ${email}, password: ${password}, login: ${login}}`);
    setLogin("");
    setEmail("");
    setPassword("");
  };

  const handlerForm = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlerForm}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../img/main-bg.jpg")}
          resizeMode="stretch"
          style={styles.imageBackground}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
          >
            <View
              style={{
                ...styles.formLogin,
                paddingBottom: isShowKeyboard ? 32 : 66,
              }}
            >
              <View style={styles.avatarBox}>
                <Image
                  style={styles.avatarImg}
                  source={require("../img/avatar.jpg")}
                  resizeMode="cover"
                />
                <Icon name="pluscircleo" size={25} color="#FF6C00" />
              </View>

              <Text style={styles.titleForm}>Registration</Text>
              <View style={{ marginTop: 33 }}>
                <TextInput
                  style={styles.inputLogin}
                  placeholder="Login"
                  onChangeText={handleLogin}
                  value={login}
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.inputLogin}
                  placeholder="Email"
                  onChangeText={handleEmail}
                  value={email}
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.inputLogin}
                  onChangeText={handlePassword}
                  value={password}
                  placeholder="Password"
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>

              {!isShowKeyboard && (
                <>
                  <TouchableOpacity
                    title="Registrated"
                    style={styles.loginButton}
                    activeOpacity={0.8}
                    onPress={keyboardHide}
                  >
                    <Text style={styles.btnTitle}>Register</Text>
                  </TouchableOpacity>
                  <Text style={styles.linkLogin}>
                    Do you alredy have an account? Log in
                  </Text>
                </>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
  },

  formLogin: {
    position: "relative",
    paddingHorizontal: 16,
    paddingTop: 92,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarBox: {
    top: -60,
    alignSelf: "center",
    height: 120,
    width: 120,
    position: "absolute",
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  //   avatarImg: { resizeMode: "cover" },
  titleForm: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 35,
  },
  inputLogin: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    color: "#212121",
  },
  loginButton: {
    paddingVertical: 16,
    marginTop: 43,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },

  btnTitle: { color: "#FFFFFF" },
  linkLogin: {
    textAlign: "center",
    marginTop: 16,
    fontFamily: "Roboto-Regular",
  },
});
