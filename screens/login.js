import {
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import styles from "../styles";

export default function Login({ saveUser, navigation }) {
  const [name, setName] = useState();

  const handleLogin = () => {
    const userInfo = { name };
    saveUser(userInfo);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <Image
          source={require("../assets/g2.png")}
          style={styles.graphicImage}
        />

        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={(e) => setName(e)}
          value={name}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
