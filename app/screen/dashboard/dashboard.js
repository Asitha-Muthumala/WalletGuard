import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation, useRouter } from "expo-router";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { BASE_URL, GET_DASHBOARD_DATA } from "../../../constants/const";

const Dashboard = () => {
  const navigation = useNavigation();
  const router = useRouter();

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

  const [dashboardData, setDashboardData] = useState([]);
  const [expenses, setExpenses] = useState('');
  const [incomes, setIncomes] = useState('');

  const getDashboardData = async () => {
    try {
      const response = await fetch(`${BASE_URL}${GET_DASHBOARD_DATA}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        setIncomes(responseData.income);
        setExpenses(responseData.expense);
        setDashboardData(responseData.data);
      } else {
        const errorData = await response.json();
        console.error(errorData.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Data fetching error.");
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    getDashboardData();
  }, []);

  // Transaction item component
  const TransactionItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionTitle}>{item.type}</Text>
      {item.assetType === 'Expense' ? (
        <Text style={styles.transactionAmountExpense}>
          {item.amount} LKR
        </Text>
      ) : (
        <Text style={styles.transactionAmountIncome}>
          {item.amount} LKR
        </Text>
      )}
      <Text style={styles.transactionDate}>{item.date.slice(0, 10)}</Text>
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
            <Text style={styles.cardMiddleHeader}>{incomes + expenses}.00</Text>
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
                  {expenses}.00
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
                  {incomes}.00
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Transaction List */}
      <View style={styles.historyContainer}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.historyTitle}>Recent History</Text>
          <Text style={{ color: '#0394fc', fontWeight: 500, fontSize: 14 }}>See More</Text>
        </View>
        <FlatList
          data={dashboardData}
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
        <TouchableOpacity onPress={() => router.push("/screen/static/static")} style={styles.navButton}>
          <MaterialIcon name="show-chart" size={28} color="#fff" />
          <Text style={styles.navButtonText}>analytics</Text>
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
  transactionAmountExpense: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
  transactionAmountIncome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
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
