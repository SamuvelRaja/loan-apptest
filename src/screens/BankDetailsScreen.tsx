import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigation/AppNavigator';
import Button from '../components/Button';

type Props = NativeStackScreenProps<MainStackParamList, 'BankDetails'>;

export default function BankDetailsScreen({ route, navigation }: Props) {
  const { bank } = route.params;
  return (
    <View className="flex-1 bg-bg p-4">
      <Text className="text-text text-2xl font-semibold mb-2">Bank Details</Text>
      <Text className="text-muted mb-6">Selected: {bank.name}</Text>
      <Text className="text-text mb-2">Rate of Interest: {bank.rate}%</Text>
      <Text className="text-text mb-8">Information: {bank.info}</Text>
  <Button label="View Brochure" onPress={() => navigation.navigate('Brochure')} />
    </View>
  );
}
