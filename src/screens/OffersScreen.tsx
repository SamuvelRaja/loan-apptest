import React, { useMemo } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigation/AppNavigator';
import { OFFERS } from '../constants/mockData';
import OfferCard from '../components/OfferCard';
import Card from '../components/Card';

type Props = NativeStackScreenProps<MainStackParamList, 'Offers'>;

export default function OffersScreen({ route, navigation }: Props) {
  const list = useMemo(() => {
    return OFFERS;
  }, []);

  return (
    <ScrollView className="flex-1 bg-bg" contentContainerStyle={{ padding: 16 }}>
      <Text className="text-text text-xl font-semibold mb-2">Available Offers</Text>
      {list.map((o) => (
        <OfferCard key={o.id} offer={o} onPress={() => navigation.navigate('BankList')} />
      ))}
      {list.length === 0 && (
        <View className="items-center py-20">
          <Text className="text-muted">No offers found.</Text>
        </View>
      )}
    </ScrollView>
  );
}
