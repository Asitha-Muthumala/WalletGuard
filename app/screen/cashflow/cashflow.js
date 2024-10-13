import { useNavigation } from "expo-router";
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
  useWindowDimensions,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const IncomeAndExpenses = ({ expenses, deleteExpense, filter, setFilter }) => {
  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Filter expenses"
        value={filter}
        onChangeText={setFilter}
      />
      <FlatList
        data={filteredExpenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text>
              {item.name}: ${item.amount}
            </Text>
            <Button title="Delete" onPress={() => deleteExpense(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const Add = ({ addExpense }) => {
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const handleSubmit = () => {
    if (name && amount) {
      addExpense({
        id: Math.random().toString(),
        name,
        amount: parseFloat(amount),
      });
      setName("");
      setAmount("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Expense name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        keyboardType="numeric"
        onChangeText={setAmount}
      />
      <Button title="Add Expense" onPress={handleSubmit} />
    </View>
  );
};

export default function CashFlow() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "incomeExpense", title: "Income & Expense" },
    { key: "add", title: "Add" },
  ]);

  const [expenses, setExpenses] = React.useState([
    { id: "1", name: "Groceries", amount: 50 },
    { id: "2", name: "Rent", amount: 500 },
    { id: "3", name: "Utility Bills", amount: 100 },
  ]);

  const [filter, setFilter] = React.useState("");

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  const renderScene = SceneMap({
    incomeExpense: () => (
      <IncomeAndExpenses
        expenses={expenses}
        deleteExpense={deleteExpense}
        filter={filter}
        setFilter={setFilter}
      />
    ),
    add: () => <Add addExpense={addExpense} />,
  });

  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View
        style={{
          height: "10%",
          display: "flex",
          alignItems: "center",
          paddingTop: 35,
        }}
      >
        <Text
          style={{
            color: "#000",
            fontSize: 18,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Cash Flow Details
        </Text>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  expenseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
