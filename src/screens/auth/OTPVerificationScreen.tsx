import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AppNavigator';
import { useAuth } from '../../hooks/useAuth';
import Button from '../../components/Button';

type Props = NativeStackScreenProps<AuthStackParamList, 'OTPVerification'>;

export default function OTPVerificationScreen({ route }: Props) {
  const { signIn } = useAuth();
  const [otp, setOtp] = useState('');
  const canVerify = /^\d{6}$/.test(otp);
  return (
    <View className="flex-1 bg-bg p-6 justify-center">
      <Text className="text-text text-2xl font-semibold mb-2">Verify</Text>
      <Text className="text-muted mb-4">Code sent to {route.params.phone}</Text>
      <TextInput
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        placeholder="Enter 6-digit code"
        placeholderTextColor="#6b7280"
        className="bg-card text-text px-4 py-3 rounded-xl mb-6 border border-[#1f2937] tracking-widest text-center"
        maxLength={6}
      />
      <Button label="Verify" disabled={!canVerify} onPress={signIn} />
    </View>
  );
}
