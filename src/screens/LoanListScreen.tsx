import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigation/AppNavigator';
import Card from '../components/Card';
import { loanTypes } from '../constants/mockData';

type Props = NativeStackScreenProps<MainStackParamList, 'LoanList'>;

export default function LoanListScreen({ navigation }: Props) {
  const categories = loanTypes.map((l) => l.name);
  return (
    <View className="flex-1 bg-bg p-4">
      <Text className="text-text text-2xl font-semibold mb-4">Loan Types</Text>
      {categories.map((c, idx) => (
        <Card key={c} onPress={() => navigation.navigate('EligibilityForm')} enterDelay={idx * 60}>
          <Text className="text-text">{c}</Text>
        </Card>
      ))}
    </View>
  );
}
