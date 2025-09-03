import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Apply'>;

export default function ApplyScreen({ route, navigation }: Props) {
  const [name, setName] = useState('');
  const [income, setIncome] = useState('');

  const canContinue = name.trim().length > 1 && Number(income) > 0;
  const proceed = () => {
    const applicationId = `app_${Date.now()}`;
    navigation.navigate('Kyc', { applicationId });
  };

  return (
    <View className="flex-1 bg-bg p-4">
      <Text className="text-text text-xl font-semibold mb-4">Your details</Text>
      <Text className="text-text mb-2">Full name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="John Doe"
        placeholderTextColor="#6b7280"
        className="bg-card text-text px-4 py-3 rounded-xl mb-4 border border-[#1f2937]"
      />
      <Text className="text-text mb-2">Monthly income (₹)</Text>
      <TextInput
        value={income}
        onChangeText={setIncome}
        keyboardType="numeric"
        placeholder="50000"
        placeholderTextColor="#6b7280"
        className="bg-card text-text px-4 py-3 rounded-xl mb-6 border border-[#1f2937]"
      />
      <Pressable disabled={!canContinue} className={`px-5 py-3 rounded-xl ${canContinue ? 'bg-primary' : 'bg-[#1f2937]'}`} onPress={proceed}>
        <Text className="text-white text-center">Continue to KYC</Text>
      </Pressable>
    </View>
  );
}
