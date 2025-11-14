// components/BalanceCard.tsx
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { BalanceCardProps } from '../types';
import { formatNumber } from '../utils/formatNumber';

const { width } = Dimensions.get('window');
const isSmall = width < 360;

const BalanceCard: React.FC<BalanceCardProps> = ({
  icon,
  symbol,
  balance,
  usdBalance,
  isSelected,
}) => {
  return (
    <View style={[styles.card, isSelected && styles.selectedCard]}>
      <View style={styles.header}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.symbol}>{symbol} Down Arrow</Text>
      </View>
      <Text style={styles.balance}>{formatNumber(balance)}</Text>
      <Text style={styles.label}>Balance</Text>
      <Text style={styles.usdBalance}>{formatNumber(usdBalance)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 16,
    padding: 16,
    width: '100%',
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 8,
  },
  symbol: {
    fontSize: isSmall ? 16 : 18,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  balance: {
    fontSize: isSmall ? 28 : 32,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  label: {
    fontSize: isSmall ? 13 : 14,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  usdBalance: {
    fontSize: isSmall ? 14 : 16,
    color: Colors.textSecondary,
  },
});

export default BalanceCard;