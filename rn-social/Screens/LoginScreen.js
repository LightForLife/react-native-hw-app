import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  Linking,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.formLogin}>
      <Text style={styles.titleForm}>Войти</Text>
      <View style={{ marginTop: 33 }}>
        <TextInput
          style={styles.inputLogin}
          placeholder="Адрес электронной почты"
          // onChangeText={onChangeText}
          // value={text}
        />
      </View>
      <View style={{ marginTop: 16 }}>
        <TextInput
          style={styles.inputLogin}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Пароль"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        title="Войти"
        style={styles.loginButton}
        activeOpacity={0.8}
      >
        <Text style={styles.btnTitle}>Войти</Text>
      </TouchableOpacity>
      <Text style={styles.linkLogin}>Нет аккаунта? Зарегистрироваться</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  formLogin: {
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 132,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
  },
  titleForm: {
    textAlign: "center",
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
  },
});
