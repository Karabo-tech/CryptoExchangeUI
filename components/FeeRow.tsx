// components/FeeRow.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { FeeRowProps } from '../types';
import { formatDecimal } from '../utils/formatNumber';

const FeeRow: React.FC<FeeRowProps> = ({ label, value, isUsd = true, isGreen = false }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, isGreen && styles.green]}>
        {isUsd ? `${formatDecimal(value, 2)} USD` : `${formatDecimal(value, 6)} ETH`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 6,
  },
  label: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
  value: {
    color: Colors.textPrimary,
    fontSize: 14,
    fontWeight: '500',
  },
  green: {
    color: Colors.feeText,
  },
});

export default FeeRow;