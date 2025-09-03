import React from 'react';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, useAuth } from '../hooks/useAuth';
import type { Bank } from '../constants/mockData';

// Screens
import LoginScreen from '../screens/auth/LoginScreen';
import OTPVerificationScreen from '../screens/auth/OTPVerificationScreen';
import HomeScreen from '../screens/HomeScreen';
import LoanListScreen from '../screens/LoanListScreen';
import EligibilityFormScreen from '../screens/EligibilityFormScreen';
import OffersScreen from '../screens/OffersScreen';
import LowCibilAppsScreen from '../screens/LowCibilAppsScreen';
import BankListScreen from '../screens/BankListScreen';
import BankDetailsScreen from '../screens/BankDetailsScreen';
import BrochureScreen from '../screens/BrochureScreen';

export type AuthStackParamList = {
  Login: undefined;
  OTPVerification: { phone: string };
};

export type MainStackParamList = {
  Home: undefined;
  LoanList: undefined;
  EligibilityForm: undefined;
  Offers: undefined;
  LowCibilApps: undefined;
  BankList: undefined;
  BankDetails: { bank: Bank };
  Brochure: undefined;
};

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

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="OTPVerification" component={OTPVerificationScreen} />
    </AuthStack.Navigator>
  );
}

const MainStack = createNativeStackNavigator<MainStackParamList>();
function MainStackNavigator() {
  return (
  <MainStack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="LoanList" component={LoanListScreen} />
      <MainStack.Screen name="EligibilityForm" component={EligibilityFormScreen} />
      <MainStack.Screen name="Offers" component={OffersScreen} />
      <MainStack.Screen name="LowCibilApps" component={LowCibilAppsScreen} />
      <MainStack.Screen name="BankList" component={BankListScreen} />
      <MainStack.Screen name="BankDetails" component={BankDetailsScreen} />
      <MainStack.Screen name="Brochure" component={BrochureScreen} />
    </MainStack.Navigator>
  );
}

function NavigatorSwitch() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />;
}

export default function AppNavigator() {
  return (
    <AuthProvider>
      <NavigationContainer theme={DarkTheme}>
        <NavigatorSwitch />
      </NavigationContainer>
    </AuthProvider>
  );
}
