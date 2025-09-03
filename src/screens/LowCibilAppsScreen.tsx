import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigation/AppNavigator';
import Card from '../components/Card';
import { loanApps } from '../constants/mockData';

type Props = NativeStackScreenProps<MainStackParamList, 'LowCibilApps'>;

export default function LowCibilAppsScreen({ navigation }: Props) {
  const apps = loanApps.map((a) => a.name);
  return (
    <ScrollView className="flex-1 bg-bg" contentContainerStyle={{ padding: 16 }}>
      <Text className="text-text text-2xl font-semibold mb-4">Recommended Apps</Text>
      {apps.map((a, idx) => (
        <Card key={a} onPress={() => navigation.navigate('Brochure')} enterDelay={idx * 60}>
          <Text className="text-text">{a}</Text>
        </Card>
      ))}
    </ScrollView>
  );
}
