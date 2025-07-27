import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FAB } from 'react-native-paper';

import colors from '../../theme/colors'; // Same color file from your dashboard

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleFabPress = () => {
    console.log('FAB pressed');
    // you can trigger navigation here
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>

        <View style={styles.titleBox}>
          <Text style={styles.titleMain}>GLT </Text>
          <Text style={styles.titleSub}>logistics</Text>
        </View>

        <TouchableOpacity onPress={() => console.log('Search tapped')}>
          <Feather name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Body */}
      <View style={styles.content}>
        <Text style={styles.welcome}>Welcome to GLT Logistics</Text>
        {/* Add cost calculator, packages, etc. here later */}
      </View>

      {/* FAB */}
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={handleFabPress}
        color="white"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // dark theme
  },
  header: {
    height: 60,
    paddingHorizontal: 16,
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleBox: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  titleMain: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  titleSub: {
    fontSize: 14,
    color: 'white',
    opacity: 0.7,
    marginLeft: 4,
    marginBottom: 2,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  welcome: {
    color: colors.primary,
    fontSize: 20,
    textAlign: 'center',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 120, // same bottom offset as dashboard
    backgroundColor: colors.primary,
    borderRadius: 28,
    height: 56,
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});