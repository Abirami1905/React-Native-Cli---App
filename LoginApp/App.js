
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Login from './src/screens/Login';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
      <StatusBar barStyle="dark-content" />
      <Login />
    </SafeAreaView>
  );
}
