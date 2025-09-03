import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Animated, { FadeInUp, Layout } from 'react-native-reanimated';
import type { LoanOffer } from '../constants/mockData';

type Props = {
  offer: LoanOffer;
  onPress: (offer: LoanOffer) => void;
};

export default function OfferCard({ offer, onPress }: Props) {
  return (
    <Animated.View entering={FadeInUp.springify().damping(12)} layout={Layout.springify()}>
      <Pressable onPress={() => onPress(offer)} className="bg-card rounded-2xl p-4 mb-3 border border-[#1f2937]">
        <View className="flex-row justify-between items-center mb-1">
          <Text className="text-text font-semibold">{offer.name}</Text>
          <Text className="text-secondary">{offer.interestRate}%</Text>
        </View>
        <Text className="text-muted text-xs mb-2">{offer.bank} • up to ₹{(offer.maxAmount / 1000).toFixed(0)}k • {offer.tenureMonths} mo</Text>
        <Text className="text-text/80 text-xs">{offer.description}</Text>
      </Pressable>
    </Animated.View>
  );
}
