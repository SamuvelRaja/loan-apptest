import './global.css';
import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
  <AppNavigator />
    </>
  );
}
