import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Import MaterialIcons

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>00:10</Text>
        <MaterialIcons name="account-balance-wallet" size={30} color="black" style={styles.appIcon} />
        <Text style={styles.battery}>63%</Text>
      </View>

      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Welcomes</Text>
        <Text style={styles.userName}>Kalana Mi</Text>
      </View>

      <View style={styles.balanceSection}>
        <Text style={styles.balanceText}>Total Balance</Text>
        <Text style={styles.balanceAmount}>5,000.00</Text>
      </View>

      <View style={styles.incomeExpenseSection}>
        <View style={styles.incomeSection}>
          <Text style={styles.incomeLabel}>Income</Text>
          <Text style={styles.incomeAmount}>4,500.00</Text>
          <MaterialIcons name="arrow-upward" size={20} color="green" style={styles.upArrow} />
        </View>
        <View style={styles.expenseSection}>
          <Text style={styles.expenseLabel}>Expense</Text>
          <Text style={styles.expenseAmount}>1,500.00</Text>
          <MaterialIcons name="arrow-downward" size={20} color="red" style={styles.downArrow} />
        </View>
      </View>

      <View style={styles.transactionsSection}>
        <Text style={styles.transactionsTitle}>Transactions</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllButtonText}>View All</Text>
        </TouchableOpacity>
        <View style={styles.transactionItem}>
          <MaterialIcons name="fastfood" size={30} color="black" style={styles.transactionIcon} />
          <Text style={styles.transactionLabel}>Food</Text>
          <Text style={styles.transactionAmount}>-45</Text>
          <Text style={styles.transactionDate}>Today</Text>
        </View>
        <View style={styles.transactionItem}>
          <MaterialIcons name="shopping-cart" size={30} color="black" style={styles.transactionIcon} />
          <Text style={styles.transactionLabel}>Shopping</Text>
          <Text style={styles.transactionAmount}>-48</Text>
          <Text style={styles.transactionDate}>Today</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonLabel}>+</Text>
      </TouchableOpacity>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.bottomNavItem}>
          <MaterialIcons name="home" size={25} color="black" style={styles.bottomNavIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <MaterialIcons name="show-chart" size={25} color="black" style={styles.bottomNavIcon} />
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
  // Header styles
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
  },
  appIcon: {
    width: 30,
    height: 30,
  },
  battery: {
    fontSize: 16,
  },

  // Welcome section styles
  welcomeSection: {
    alignItems: "center",
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  userName: {
    fontSize: 18,
  },

  // Balance section styles
  balanceSection: {
    alignItems: "center",
    marginTop: 20,
  },
  balanceText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: "bold",
  },

  // Income and expense section styles
  incomeExpenseSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  incomeSection: {
    alignItems: "center",
  },
  expenseSection: {
    alignItems: "center",
  },
  incomeLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  expenseLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  incomeAmount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  expenseAmount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  upArrow: {
    marginTop: 5,
  },
  downArrow: {
    marginTop: 5,
  },

  // Transactions section styles
  transactionsSection: {
    marginTop: 20,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAllButton: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  viewAllButtonText: {
    fontSize: 16,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  transactionIcon: {
    width: 30,
    height: 30,
  },
  transactionLabel: {
    fontSize: 16,
  },
  transactionAmount: {
    fontSize: 16,
    color: "red",
  },
  transactionDate: {
    fontSize: 14,
    color: "gray",
  },

  // Add button styles
  addButton: {
    backgroundColor: "#007bff",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  addButtonLabel: {
    fontSize: 24,
    color: "white",
  },

  // Bottom navigation styles
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  bottomNavItem: {
    alignItems: "center",
  },
  bottomNavIcon: {
    width: 25,
    height: 25,
  },
});

export default Dashboard;
