import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation, useRouter } from "expo-router";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const Dashboard = () => {
  const navigation = useNavigation();
  const router = useRouter();

  // Mock transaction data
  const transactions = [
    { id: "1", title: "Grocery Shopping", amount: "-$50", date: "2024-10-10" },
    { id: "2", title: "Salary", amount: "+$2000", date: "2024-10-09" },
    { id: "3", title: "Utility Bill", amount: "-$100", date: "2024-10-08" },
    { id: "4", title: "Gym Membership", amount: "-$30", date: "2024-10-07" },
    { id: "5", title: "Freelance Work", amount: "+$400", date: "2024-10-05" },
    { id: "6", title: "Freelance Work", amount: "+$400", date: "2024-10-05" },
    { id: "7", title: "Freelance Work", amount: "+$400", date: "2024-10-05" },
    { id: "8", title: "Freelance Work", amount: "+$400", date: "2024-10-05" },
  ];

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // Transaction item component
  const TransactionItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionTitle}>{item.title}</Text>
      <Text
        style={
          item.amount.startsWith("+")
            ? styles.transactionAmountIncome
            : styles.transactionAmountExpense
        }
      >
        {item.amount}
      </Text>
      <Text style={styles.transactionDate}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <MaterialIcon name="person" size={30} color="white" />
          <Text
            style={{
              marginTop: 10,
              fontWeight: "bold",
              marginStart: 10,
              color: "#fff",
            }}
          >
            Asitha Muthumala
          </Text>
        </View>
        <MaterialIcon name="settings" size={30} color="white" />
      </View>

      {/* Card */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <Text style={styles.cardTopHeader}>Total Balance</Text>
          </View>

          <View style={styles.cardMiddle}>
            <Text style={styles.cardMiddleHeader}>5000.00</Text>
          </View>

          <View style={styles.cardBottom}>
            <View style={styles.cardBottomLeft}>
              <View>
                <MaterialIcon
                  style={{ color: "#ed6b4e" }}
                  name="keyboard-arrow-up"
                  size={50}
                />
              </View>
              <View>
                <Text style={{ color: "#fff" }}>Expense</Text>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  1500.00
                </Text>
              </View>
            </View>

            <View style={styles.cardBottomRight}>
              <View>
                <MaterialIcon
                  style={{ color: "#46e353" }}
                  name="keyboard-arrow-down"
                  size={50}
                />
              </View>
              <View>
                <Text style={{ color: "#fff" }}>Income</Text>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  4500.00
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Transaction List */}
      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>Recent History</Text>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={TransactionItem}
          contentContainerStyle={styles.transactionList}
        />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navButton}>
          <MaterialIcon name="home" size={28} color="#fff" />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/screen/cashflow/cashflow")}
          style={styles.navButton}
        >
          <MaterialIcon name="history" size={28} color="#fff" />
          <Text style={styles.navButtonText}>CashFlow</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/screen/profile/profile")}
          style={styles.navButton}
        >
          <MaterialIcon name="person" size={28} color="#fff" />
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <MaterialIcon name="settings" size={28} color="#fff" />
          <Text style={styles.navButtonText}>Settings</Text>
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
  headerContainer: {
    height: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingEnd: 20,
    paddingStart: 20,
    backgroundColor: "#2158bf",
  },
  cardContainer: {
    height: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: "90%",
    width: "90%",
    backgroundColor: "#6ba3ed",
    borderRadius: 15,
  },
  cardTop: {
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTopHeader: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  cardMiddle: {
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardMiddleHeader: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  cardBottom: {
    height: "40%",
    display: "flex",
    flexDirection: "row",
  },
  cardBottomLeft: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingStart: 20,
  },
  cardBottomRight: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 35,
  },
  historyContainer: {
    height: "57%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactionList: {
    paddingBottom: 20,
  },
  transactionItem: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionAmountIncome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#46e353",
  },
  transactionAmountExpense: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ed6b4e",
  },
  transactionDate: {
    fontSize: 14,
    color: "#888",
  },
  bottomNavigation: {
    height: "8%",
    backgroundColor: "#2158bf",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navButton: {
    alignItems: "center",
  },
  navButtonText: {
    color: "#fff",
    fontSize: 10,
    marginTop: 5,
    fontWeight: "bold",
  },
});

export default Dashboard;
