import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigation/AppNavigator';
import { OFFERS } from '../constants/mockData';
import OfferCard from '../components/OfferCard';

type Props = NativeStackScreenProps<MainStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <ScrollView className="flex-1 bg-bg" contentContainerStyle={{ padding: 16 }}>
  <Text className="text-text text-3xl font-semibold mb-4">Welcome</Text>
      <View className="flex-row mb-6">
  <Pressable className="bg-primary rounded-2xl p-5 mr-3 flex-1 shadow-lg shadow-blue-900/25" onPress={() => navigation.navigate('LoanList')}>
          <Text className="text-white text-lg font-semibold mb-1">Sell</Text>
          <Text className="text-white/80 text-xs">Find and sell the best loan offers</Text>
        </Pressable>
  <Pressable className="bg-card rounded-2xl p-5 flex-1 border border-white/5 shadow-lg shadow-black/20" onPress={() => navigation.navigate('Brochure')}>
          <Text className="text-text text-lg font-semibold mb-1">Grow</Text>
          <Text className="text-muted text-xs">Learn and improve credit profile</Text>
        </Pressable>
      </View>
      <Text className="text-text text-xl font-semibold mb-3">Explore loans</Text>
      <View className="flex-row mb-4">
        {['Personal', 'Business', 'Home', 'Auto'].map((c) => (
          <Pressable key={c} className="bg-card rounded-full px-3 py-2 mr-2 border border-[#1f2937]" onPress={() => navigation.navigate('LoanList')}>
            <Text className="text-text text-xs">{c}</Text>
          </Pressable>
        ))}
      </View>
      <Text className="text-muted text-sm mb-2">Top picks</Text>
      {OFFERS.map((o) => (
        <OfferCard key={o.id} offer={o} onPress={() => navigation.navigate('BankList')} />
      ))}
    </ScrollView>
  );
}
