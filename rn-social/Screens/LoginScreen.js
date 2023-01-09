import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
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

export default function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEmail(e);
  const handlePassword = (e) => setPassword(e);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(`{email: ${email}, password: ${password}}`);
    // setEmail("");
    // setPassword("");
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
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
          >
            <View
              style={{
                ...styles.formLogin,
                paddingBottom: isShowKeyboard ? 32 : 144,
              }}
            >
              <Text style={styles.titleForm}>Login</Text>
              <View style={{ marginTop: 33 }}>
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
              <TouchableOpacity
                title="Log in"
                style={styles.loginButton}
                activeOpacity={0.8}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>Log in</Text>
              </TouchableOpacity>
              <Text style={styles.linkLogin}>
                Don't have an account? Registration
              </Text>
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
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  formLogin: {
    // marginBottom: 143,
    paddingHorizontal: 16,
    paddingTop: 32,
    // paddingBottom: 144,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
  },
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
