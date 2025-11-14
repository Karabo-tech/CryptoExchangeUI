// components/Header.tsx
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exchange</Text>
      <Image source={require('../assets/icons/bell.png')} style={styles.bell} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  bell: {
    width: 24,
    height: 24,
    tintColor: Colors.textSecondary,
  },
});

export default Header;