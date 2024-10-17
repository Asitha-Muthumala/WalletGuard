import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter, useNavigation } from "expo-router";
import { BASE_URL, LOGIN } from "../../../constants/const";

const Index = () => {
  const router = useRouter();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const payload = {
      email: email,
      password: password
    };

    // try {
    //   const response = await fetch(`${BASE_URL}${LOGIN}`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(payload),
    //   });

    //   if (response.ok) {
    //     const responseData = await response.json();
    //     clearLogin();
    //     router.push("/screen/dashboard/dashboard");
    //   } else {
    //     const errorData = await response.json();
    //     console.error(errorData.message);
    //   }
    // } catch (error) {
    //   console.error(error);
    //   Alert.alert("Error", "Server error.");
    // }
    router.push("/screen/dashboard/dashboard");
  };

  const clearLogin = () => {
    setEmail('');
    setPassword('');
  }
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("auth/sign-up")}>
        <Text style={styles.link}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "rgb(255, 99, 71)",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  link: {
    marginTop: 15,
    textAlign: "center",
    color: "blue",
  },
});

export default Index;
