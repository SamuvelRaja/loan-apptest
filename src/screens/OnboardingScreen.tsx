import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import Animated, { FadeIn } from 'react-native-reanimated';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

export default function OnboardingScreen({ navigation }: Props) {
  return (
    <View className="flex-1 bg-bg items-center justify-center p-6">
      <Animated.View entering={FadeIn.duration(400)} className="items-center">
        <Text className="text-3xl font-semibold text-text mb-2">Welcome</Text>
        <Text className="text-muted text-center mb-8">Find and apply for the best loan offers.</Text>
        <Pressable className="bg-primary px-5 py-3 rounded-xl" onPress={() => navigation.replace('Home')}>
          <Text className="text-white">Get Started</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}
