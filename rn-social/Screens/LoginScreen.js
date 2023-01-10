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
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(true);
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const handleLogin = (e) => setLogin(e);
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
                paddingBottom: isShowKeyboard ? 32 : 144,
              }}
            >
              <Text style={styles.titleForm}>Login</Text>
              <View style={{ marginTop: 33 }}>
                <TextInput
                  style={
                    isShowKeyboard
                      ? {
                          ...styles.inputLogin,
                          borderColor: "#FF6C00",
                        }
                      : {
                          ...styles.inputLogin,
                          borderColor: "#E8E8E8",
                        }
                  }
                  placeholder="Email"
                  onChangeText={handleEmail}
                  value={email}
                  keyboardType="email-address"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => setIsShowKeyboard(true)}
                  // onBlur={() => setIsShowKeyboard(false)}
                />
              </View>
              <View
                style={{
                  marginTop: 16,
                }}
              >
                <TextInput
                  style={
                    isShowKeyboard
                      ? {
                          ...styles.inputLogin,
                          borderColor: "#FF6C00",
                        }
                      : {
                          ...styles.inputLogin,
                          borderColor: "#E8E8E8",
                        }
                  }
                  onChangeText={handlePassword}
                  value={password}
                  placeholder="Password"
                  secureTextEntry={isSecureEntry}
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => setIsShowKeyboard(true)}
                  // onBlur={() => setIsShowKeyboard(false)}
                />
                <TouchableOpacity
                  style={styles.secureTitle}
                  activeOpacity={0.8}
                  onPress={() => setIsSecureEntry((prev) => !prev)}
                >
                  <Text style={styles.secureText}>
                    {isSecureEntry ? "Show" : "Hide"}
                  </Text>
                </TouchableOpacity>
              </View>

              {!isShowKeyboard && (
                <>
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
    // position: "relative",
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  titleForm: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
  },
  inputLogin: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    placeholderTextColor: "red",
    color: "#212121",
  },
  secureTitle: {
    position: "absolute",
    right: 20,
    top: 15,
  },
  secureText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  loginButton: {
    paddingVertical: 16,
    marginTop: 43,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  btnTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  linkLogin: {
    marginTop: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
});
