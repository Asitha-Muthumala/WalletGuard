import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Started = () => {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topBlock}>
        <MaterialIcons name="monetization-on" size={100} color="white" />
        <Text style={styles.title}>Welcome to the WalletGuard</Text>
        <Text style={styles.subtitle}>Let's get started!</Text>
      </View>

      <View style={styles.bottomBlock}>
        <TouchableOpacity
          onPress={() => router.push("/auth/sign-in")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2158bf",
  },
  topBlock: {
    width: "100%",
    height: "70%",
    backgroundColor: "#2158bf",
    padding: 20,
    marginHorizontal: 0,
    marginVertical: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: "white",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    marginTop: 5,
  },
  bottomBlock: {
    padding: 20,
    display: "flex",
    flexDirection: "col",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    height: "30%",
  },
  button: {
    width: "80%",
    padding: 15,
    backgroundColor: "rgb(255, 99, 71)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default Started;
