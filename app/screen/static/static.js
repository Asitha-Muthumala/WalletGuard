import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const PersonalIncomeExpenseScreen = () => {

  const navigation = useNavigation();

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [500, 800, 400, 900, 1200, 700],
        color: () => '#4CAF50',
        strokeWidth: 2,
      },
      {
        data: [400, 300, 500, 600, 800, 450],
        color: () => '#F44336',
        strokeWidth: 2,
      },
    ],
    legend: ['Income', 'Expenses'],
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcon name="bar-chart" size={28} color="#fff" />
        <Text style={styles.headerText}>Personal Finance Overview</Text>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Text style={{ fontWeight: 'bold' }}>Currency : LKR</Text>
      </View>

      <LineChart
        data={data}
        width={Dimensions.get('window').width - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#f5f5f5',
          backgroundGradientFrom: '#f5f5f5',
          backgroundGradientTo: '#f5f5f5',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

      {/* Details Section */}
      <View style={styles.details}>
        <Text style={styles.detailsHeader}>Summary</Text>
        <Text style={styles.detailsText}>Total Income: 4,500</Text>
        <Text style={styles.detailsText}>Total Expenses: 3,050</Text>
        <Text style={styles.detailsText}>Net Savings: 1,450</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.detailsHeader}>Breakdown</Text>
        <Text style={styles.detailsText}>• January: 500 income / 400 expenses</Text>
        <Text style={styles.detailsText}>• February: 800 income / 300 expenses</Text>
        <Text style={styles.detailsText}>• March: 400 income / 500 expenses</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4298f5',
    padding: 10,
    marginTop: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  details: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  detailsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default PersonalIncomeExpenseScreen;
