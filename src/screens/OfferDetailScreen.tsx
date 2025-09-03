import React, { useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { OFFERS } from '../constants/mockData';

type Props = NativeStackScreenProps<RootStackParamList, 'OfferDetail'>;

export default function OfferDetailScreen({ route, navigation }: Props) {
  const offer = useMemo(() => OFFERS.find((o) => o.id === route.params.offerId), [route.params.offerId]);
  if (!offer) return (
    <View className="flex-1 items-center justify-center bg-bg">
      <Text className="text-text">Offer not found</Text>
    </View>
  );
  return (
    <View className="flex-1 bg-bg p-4">
      <Text className="text-text text-2xl font-semibold mb-1">{offer.name}</Text>
      <Text className="text-muted mb-4">{offer.bank} • {offer.interestRate}% • up to ₹{(offer.maxAmount/1000).toFixed(0)}k</Text>
      <Text className="text-text/80 mb-8">{offer.description}</Text>
      <Pressable className="bg-primary px-5 py-3 rounded-xl" onPress={() => navigation.navigate('Apply', { offerId: offer.id })}>
        <Text className="text-white text-center">Apply Now</Text>
      </Pressable>
    </View>
  );
}
