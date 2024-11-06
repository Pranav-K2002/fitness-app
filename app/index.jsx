import { View, Text } from 'react-native';
import React from 'react';
import { StatusBar } from "expo-status-bar";
import "../global.css";


export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-600">
      <Text className="text-yellow-200 text-3xl">Hey! Welcome.</Text>
      <StatusBar style="light" />
    </View>
  );
}