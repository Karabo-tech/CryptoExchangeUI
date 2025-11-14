// components/BuyButton.tsx
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const { width } = Dimensions.get('window');
const buttonWidth = width * 0.9;

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
    marginHorizontal: '5%',
    marginTop: 20,
    marginBottom: 40,
  },
  text: {
    color: Colors.buttonText,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default BuyButton;