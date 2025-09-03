import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigation/AppNavigator';
import Button from '../components/Button';

type Props = NativeStackScreenProps<MainStackParamList, 'EligibilityForm'>;

export default function EligibilityFormScreen({ navigation }: Props) {
  const [pan, setPan] = useState('');
  const [mobile, setMobile] = useState('');

  const valid = /^[A-Z]{5}\d{4}[A-Z]$/.test(pan) && /^\d{10}$/.test(mobile);

  const mockCibilCheck = (): 'low' | 'high' => (Math.random() < 0.5 ? 'low' : 'high');
  const checkEligibility = () => {
    const res = mockCibilCheck();
    if (res === 'low') navigation.navigate('LowCibilApps');
    else navigation.navigate('BankList');
  };

  return (
    <View className="flex-1 bg-bg p-4">
      <Text className="text-text text-xl font-semibold mb-4">Eligibility</Text>
      <Text className="text-text mb-2">PAN</Text>
      <TextInput
        autoCapitalize="characters"
        value={pan}
        onChangeText={setPan}
        placeholder="ABCDE1234F"
        placeholderTextColor="#6b7280"
        className="bg-card text-text px-4 py-3 rounded-xl mb-4 border border-[#1f2937]"
        maxLength={10}
      />
      <Text className="text-text mb-2">Mobile</Text>
      <TextInput
        value={mobile}
        onChangeText={setMobile}
        keyboardType="number-pad"
        placeholder="9999999999"
        placeholderTextColor="#6b7280"
        className="bg-card text-text px-4 py-3 rounded-xl mb-6 border border-[#1f2937]"
        maxLength={10}
      />
  <Button label="Check Eligibility" disabled={!valid} onPress={checkEligibility} />
    </View>
  );
}
