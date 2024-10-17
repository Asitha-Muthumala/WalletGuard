import { useNavigation, useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const Profile = () => {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const user = {
    name: "Asitha Muthumala",
    email: "asitha@example.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  };

  const handleLogout = () => {
    Alert.alert("Log Out", "Are you sure you want to log out?", [
      {
        text: "Cancel",
        onPress: () => console.log("Logout Cancelled"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          console.log("Logged out");
          router.push("/auth/sign-in");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image source={{ uri: user.avatarUrl }} style={styles.avatar} />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>

      {/* Profile Options */}
      <View style={styles.profileOptions}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("PersonalInfo")}
        >
          <MaterialIcon name="person" size={30} color="#6ba3ed" />
          <Text style={styles.optionText}>Personal Information</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("ChangePassword")}
        >
          <MaterialIcon name="lock" size={30} color="#6ba3ed" />
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("Notifications")}
        >
          <MaterialIcon name="notifications" size={30} color="#6ba3ed" />
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("AccountSettings")}
        >
          <MaterialIcon name="settings" size={30} color="#6ba3ed" />
          <Text style={styles.optionText}>Account Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("HelpSupport")}
        >
          <MaterialIcon name="help" size={30} color="#6ba3ed" />
          <Text style={styles.optionText}>Help & Support</Text>
        </TouchableOpacity>
      </View>

      {/* Log Out Button */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <MaterialIcon name="logout" size={30} color="#fff" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileHeader: {
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6ba3ed",
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  userEmail: {
    fontSize: 16,
    color: "#fff",
  },
  profileOptions: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
    color: "#333",
  },
  logoutContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    paddingHorizontal: 20,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ed6b4e",
    padding: 15,
    borderRadius: 10,
  },
  logoutText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
  },
});

export default Profile;
