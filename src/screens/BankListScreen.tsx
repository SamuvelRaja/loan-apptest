import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigation/AppNavigator';
import Card from '../components/Card';
import { banks } from '../constants/mockData';

type Props = NativeStackScreenProps<MainStackParamList, 'BankList'>;

export default function BankListScreen({ navigation }: Props) {
  const list = banks;
  return (
    <View className="flex-1 bg-bg p-4">
      <Text className="text-text text-xl font-semibold mb-4">Banks</Text>
      {list.map((b, idx) => (
        <Card key={b.id} onPress={() => navigation.navigate('BankDetails', { bank: b })} enterDelay={idx * 60}>
          <View className="flex-row justify-between">
            <Text className="text-text">{b.name}</Text>
            <Text className="text-secondary">{b.rate}%</Text>
          </View>
        </Card>
      ))}
    </View>
  );
}
