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
  TouchableOpacity,
  Alert,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import {
  ADD_ASSET,
  BASE_URL,
  GET_INCOME_EXPENSE,
} from "../../../constants/const";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const Add = () => {
  const [cashFlowValue, setCashFlowValue] = React.useState("Income");
  const [expenseType, setExpenseType] = React.useState("Food");
  const [incomeType, setIncomeType] = React.useState("Salary");
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setShowPicker(false);
    }

    if (selectedDate) {
      setDate(selectedDate);
      setShowPicker(false);
    }

    if (Platform.OS === "android") {
      setShowPicker(false);
    }
  };

  const openDatePicker = () => {
    setShowPicker(true);
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const onSubmit = async () => {
    const payload = {
      amount: amount,
      date: date,
      assetType: cashFlowValue,
      type: cashFlowValue == "Income" ? incomeType : expenseType,
      description: description,
      userId: 1,
    };

    try {
      const response = await fetch(`${BASE_URL}${ADD_ASSET}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const responseData = await response.json();
        Alert.alert("Success", responseData.message);
        onClear();
      } else {
        const errorData = await response.json();
        console.error(errorData.message);
        Alert.alert("Error", errorData.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Server error.");
    }
  };

  const onClear = () => {
    setCashFlowValue("Income");
    setExpenseType("Food");
    setIncomeType("Salary");
    setDate(new Date());
    setAmount("");
    setDescription("");
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginBottom: 5,
          marginTop: 20,
          fontSize: 12,
          fontWeight: "400",
          textTransform: "uppercase",
        }}
      >
        Cash Flow Type
      </Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          paddingHorizontal: 0,
          backgroundColor: "#fff",
          height: 40,
          justifyContent: "center",
          width: "100%",
          marginBottom: 10,
        }}
      >
        <Picker
          selectedValue={cashFlowValue}
          style={{
            width: "100%",
            height: "100%",
            color: "#000",
          }}
          onValueChange={(itemValue) => setCashFlowValue(itemValue)}
          dropdownIconColor="#000"
        >
          <Picker.Item label="Expense" value="Expense" />
          <Picker.Item label="Income" value="Income" />
        </Picker>
      </View>

      <Text
        style={{
          marginBottom: 5,
          fontSize: 12,
          fontWeight: "400",
          textTransform: "uppercase",
        }}
      >
        Type
      </Text>
      {cashFlowValue == "Expense" ? (
        <View
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            paddingHorizontal: 0,
            backgroundColor: "#fff",
            height: 40,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Picker
            selectedValue={expenseType}
            style={{
              width: "100%",
              height: "100%",
              color: "#000",
            }}
            onValueChange={(itemValue) => setExpenseType(itemValue)}
            dropdownIconColor="#000"
          >
            <Picker.Item label="Food" value="Food" />
            <Picker.Item label="Transpotation" value="Transpotation" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>
      ) : (
        <View
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            paddingHorizontal: 0,
            backgroundColor: "#fff",
            height: 40,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Picker
            selectedValue={incomeType}
            style={{
              width: "100%",
              height: "100%",
              color: "#000",
            }}
            onValueChange={(itemValue) => setIncomeType(itemValue)}
            dropdownIconColor="#000"
          >
            <Picker.Item label="Salary" value="Salary" />
            <Picker.Item label="Freelancing" value="Freelancing" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>
      )}

      <Text
        style={{
          marginTop: 10,
          fontSize: 12,
          fontWeight: "400",
          textTransform: "uppercase",
        }}
      >
        Date
      </Text>
      <View style={{ backgroundColor: "#fff", marginTop: 5, marginBottom: 5 }}>
        <TouchableOpacity onPress={openDatePicker}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              borderRadius: 5,
            }}
            placeholder="Select Date"
            value={formatDate(date)}
            editable={false}
            pointerEvents="none"
          />
        </TouchableOpacity>
        {showPicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleChange}
          />
        )}
      </View>

      <Text
        style={{ fontSize: 12, fontWeight: "400", textTransform: "uppercase" }}
      >
        Amount
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Text
        style={{ fontSize: 12, fontWeight: "400", textTransform: "uppercase" }}
      >
        Description
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      <View
        style={{
          paddingTop: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            width: 150,
            padding: 10,
            backgroundColor: "red",
            alignItems: "center",
            marginVertical: 5,
            borderRadius: 5,
          }}
          onPress={onClear}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Clear</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 150,
            padding: 10,
            backgroundColor: "blue",
            alignItems: "center",
            marginVertical: 5,
            borderRadius: 5,
          }}
          onPress={onSubmit}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const IncomeAndExpenses = () => {
  const [incomeExpenseList, setIncomeExpenseList] = React.useState([]);

  const getIncomeExpenses = async () => {
    try {
      const response = await fetch(`${BASE_URL}${GET_INCOME_EXPENSE}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        setIncomeExpenseList(responseData.data);
      } else {
        const errorData = await response.json();
        console.error(errorData.message);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Data fetching error.");
    }
  };

  React.useEffect(() => {
    getIncomeExpenses();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Filter expenses" />

      <FlatList
        data={incomeExpenseList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text>
              {item.type} : {item.amount} LKR
            </Text>
            <Text>{item.date.slice(0,10)}</Text>
            <TouchableOpacity>
              <MaterialIcon name="delete" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default function CashFlow() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const navigation = useNavigation();

  const [routes] = React.useState([
    { key: "incomeExpense", title: "Income & Expense" },
    { key: "add", title: "Add" },
  ]);

  const renderScene = SceneMap({
    incomeExpense: () => <IncomeAndExpenses />,
    add: () => <Add />,
  });

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
    backgroundColor: "#fff",
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
