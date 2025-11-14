// app/index.tsx
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import BalanceCard from '../components/BalanceCard';
import BuyButton from '../components/BuyButton';
import ExchangeRate from '../components/ExchangeRate';
import FeeRow from '../components/FeeRow';
import Header from '../components/Header';
import Colors from '../constants/Colors';

const ethIcon = require('../assets/icons/eth.png');
const usdIcon = require('../assets/icons/usd.png');

// Responsive helpers
const { width, height } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';

// Dynamic card width
const getCardWidth = () => {
  if (isWeb) {
    if (width >= 1200) return 400;
    if (width >= 1024) return 380;
    if (width >= 768) return 340;
    if (width >= 480) return 300;
    return 280;
  }
  return width * 0.88; // Mobile: 88% of screen
};

const cardWidth = getCardWidth();

export default function HomeScreen() {
  const [selected, setSelected] = useState<'ETH' | 'USD'>('USD');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Header />

        {/* ETH Card */}
        <View style={styles.cardWrapper}>
          <BalanceCard
            icon={ethIcon}
            symbol="ETH"
            balance={12695}
            usdBalance={43937.4}
            isSelected={selected === 'ETH'}
          />
        </View>

        {/* Swap Icon */}
        <View style={styles.swapIconContainer}>
          <Image source={require('../assets/icons/swap.png')} style={styles.swapIcon} />
        </View>

        {/* USD Card */}
        <View style={styles.cardWrapper}>
          <BalanceCard
            icon={usdIcon}
            symbol="USD"
            balance={43937.4}
            usdBalance={43937.4}
            isSelected={selected === 'USD'}
          />
        </View>

        <ExchangeRate />

        <BuyButton />

        <View style={styles.feeSection}>
          <FeeRow label="Estimate fee" value={4.28} />
          <FeeRow label="You will receive" value={43494.68} isGreen />
          <FeeRow label="Spread" value={0.2} />
          <FeeRow label="Gas fee" value={0.0045} isUsd={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingBottom: 40,
    alignItems: 'center', // Center all content
  },
  cardWrapper: {
    width: cardWidth,
    marginVertical: 16,
  },
  swapIconContainer: {
    marginVertical: 20,
  },
  swapIcon: {
    width: 36,
    height: 36,
    tintColor: '#FFFFFF',
  },
  feeSection: {
    width: '100%',
    maxWidth: 500,
    paddingHorizontal: 20,
    marginTop: 24,
  },
});