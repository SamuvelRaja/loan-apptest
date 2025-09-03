import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Kyc'>;

export default function KycScreen({ route, navigation }: Props) {
  const [status, setStatus] = useState<'pending' | 'approved' | 'rejected'>('pending');

  useEffect(() => {
    const t = setTimeout(() => {
      // Mock: 70% approved, 20% pending, 10% rejected
      const r = Math.random();
      const s = r < 0.1 ? 'rejected' : r < 0.8 ? 'approved' : 'pending';
      setStatus(s);
      navigation.replace('Result', { applicationId: route.params.applicationId, status: s });
    }, 1500);
    return () => clearTimeout(t);
  }, [navigation, route.params.applicationId]);

  return (
    <View className="flex-1 items-center justify-center bg-bg">
      <ActivityIndicator size="small" color="#1D4ED8" />
      <Text className="text-muted mt-3">Verifying your details…</Text>
    </View>
  );
}
