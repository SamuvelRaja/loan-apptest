import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Result'>;

export default function ResultScreen({ route, navigation }: Props) {
  const { status } = route.params;
  const color = status === 'approved' ? 'text-success' : status === 'rejected' ? 'text-danger' : 'text-secondary';
  const title = status === 'approved' ? 'Approved!' : status === 'rejected' ? 'Rejected' : 'Pending Review';

  return (
    <View className="flex-1 bg-bg items-center justify-center p-6">
      <Text className={`text-3xl font-semibold mb-2 ${color}`}>{title}</Text>
      <Text className="text-muted mb-8 text-center">
        {status === 'approved' && 'Your loan is approved. A representative will contact you shortly.'}
        {status === 'rejected' && 'Sorry, your application did not meet the criteria at this time.'}
        {status === 'pending' && 'We need a bit more time to review your application.'}
      </Text>
      <Pressable className="bg-card px-5 py-3 rounded-xl border border-[#1f2937]" onPress={() => navigation.popToTop()}>
        <Text className="text-text">Back to Home</Text>
      </Pressable>
    </View>
  );
}
