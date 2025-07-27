import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { FAB } from 'react-native-paper';

import GLTHeader from '../components/GLTHeader'; // ✅ your new header
import colors from '../theme/colors'; // 🔁 dark theme colors

export default function HomeScreen() {
  const handleFabPress = () => {
    console.log('FAB pressed');
    // Add navigation or modal later
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ✅ Custom Header */}
      <GLTHeader />

      {/* Body */}
      <View style={styles.content}>
        <Text style={styles.welcome}>Welcome to GLT Logistics</Text>
      </View>

      {/* Floating Action Button */}
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={handleFabPress}
        color="white"
      />
    </SafeAreaView>
  );
}