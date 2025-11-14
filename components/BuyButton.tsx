// components/BuyButton.tsx
import React from 'react';
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const { width } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';

const buttonWidth = isWeb
  ? width >= 1200
    ? 400
    : width >= 768
    ? 340
    : 300
  : width * 0.88;

const BuyButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Buy ETH</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: buttonWidth,
    backgroundColor: Colors.buttonBackground,
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 24,
  },
  text: {
    color: Colors.buttonText,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default BuyButton;