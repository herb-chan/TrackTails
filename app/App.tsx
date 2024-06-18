import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootLayout from './_layout';  // Adjust the path as needed

export default function App() {
  return (
    <NavigationContainer>
      <RootLayout />
    </NavigationContainer>
  );
}
