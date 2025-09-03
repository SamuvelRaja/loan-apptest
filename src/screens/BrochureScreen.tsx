import React from 'react';
import { Text, ScrollView } from 'react-native';
import Card from '../components/Card';

export default function BrochureScreen() {
  const items = [
    { title: 'Personal Loan', desc: 'Unsecured loans for personal needs, quick disbursal.' },
    { title: 'Business Loan', desc: 'Working capital and expansion loans for SMEs.' },
    { title: 'Home Loan', desc: 'Long tenure loans for purchasing property.' },
  ];
  return (
    <ScrollView className="flex-1 bg-bg" contentContainerStyle={{ padding: 16 }}>
      <Text className="text-text text-2xl font-semibold mb-4">Brochure</Text>
      {items.map((it, idx) => (
        <Card key={it.title} enterDelay={idx * 60}>
          <Text className="text-text font-semibold mb-1">{it.title}</Text>
          <Text className="text-muted text-sm">{it.desc}</Text>
        </Card>
      ))}
    </ScrollView>
  );
}
