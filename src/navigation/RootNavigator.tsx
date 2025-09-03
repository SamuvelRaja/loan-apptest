import React from 'react';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import OffersScreen from '../screens/OffersScreen';
import OfferDetailScreen from '../screens/OfferDetailScreen';
import ApplyScreen from '../screens/ApplyScreen';
import KycScreen from '../screens/KycScreen';
import ResultScreen from '../screens/ResultScreen';

export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
  Offers: { category?: string } | undefined;
  OfferDetail: { offerId: string };
  Apply: { offerId: string };
  Kyc: { applicationId: string };
  Result: { applicationId: string; status: 'approved' | 'rejected' | 'pending' };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const DarkTheme: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: '#0B1220',
    card: '#111827',
    text: '#F3F4F6',
    primary: '#1D4ED8',
    border: '#111827',
    notification: '#F59E0B',
  },
};

export default function RootNavigator() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Offers" component={OffersScreen} />
        <Stack.Screen name="OfferDetail" component={OfferDetailScreen} />
        <Stack.Screen name="Apply" component={ApplyScreen} />
        <Stack.Screen name="Kyc" component={KycScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
