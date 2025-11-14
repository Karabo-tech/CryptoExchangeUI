// components/ExchangeRate.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const ExchangeRate: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>1 ETH = 3,461.02 USD</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 16,
  },
  text: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
});

export default ExchangeRate;