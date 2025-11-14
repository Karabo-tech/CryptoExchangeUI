// App.tsx
import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View
} from 'react-native';
import BalanceCard from './components/BalanceCard';
import BuyButton from './components/BuyButton';
import ExchangeRate from './components/ExchangeRate';
import FeeRow from './components/FeeRow';
import Header from './components/Header';
import Colors from './constants/Colors';

const ethIcon = require('./assets/icons/eth.png');
const usdIcon = require('./assets/icons/usd.png');

export default function App() {
  const [selected, setSelected] = useState<'ETH' | 'USD'>('USD');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.cardScroll}
        >
          <BalanceCard
            icon={ethIcon}
            symbol="ETH"
            balance={12695}
            usdBalance={43937.4}
            isSelected={selected === 'ETH'}
          />
          <BalanceCard
            icon={usdIcon}
            symbol="USD"
            balance={43937.4}
            usdBalance={43937.4}
            isSelected={selected === 'USD'}
          />
        </ScrollView>

        <View style={styles.swapIconContainer}>
          <Image source={require('./assets/icons/swap.png')} style={styles.swapIcon} />
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
  cardScroll: {
    paddingLeft: 12,
  },
  swapIconContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  swapIcon: {
    width: 32,
    height: 32,
    tintColor: '#FFFFFF',
  },
  feeSection: {
    marginTop: 20,
    paddingBottom: 30,
  },
});