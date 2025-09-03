import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AppNavigator';
import Button from '../../components/Button';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [phone, setPhone] = useState('');
  const canContinue = /^\d{10}$/.test(phone);
  return (
    <View className="flex-1 bg-bg p-6 justify-center">
      <Text className="text-text text-3xl font-semibold mb-6">Welcome</Text>
      <Text className="text-muted mb-2">Enter your phone number</Text>
      <View className="bg-card rounded-xl border border-[#1f2937] flex-row items-center px-3 py-2 mb-6">
        <Text className="text-text mr-2">+91</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          keyboardType="number-pad"
          placeholder="9876543210"
          placeholderTextColor="#6b7280"
          className="flex-1 text-text px-2 py-2"
          maxLength={10}
        />
      </View>
      <Button label="Send Verification Code" disabled={!canContinue} onPress={() => navigation.navigate('OTPVerification', { phone })} />
    </View>
  );
}
