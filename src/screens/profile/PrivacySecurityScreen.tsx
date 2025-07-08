import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PrivacySecurityScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Privacy & Security</Text>
        <Text style={styles.text}>
          Your privacy and security are important to us. This section explains how we protect your data and your rights as a user.
        </Text>
        <Text style={styles.sectionTitle}>1. Data Collection</Text>
        <Text style={styles.text}>
          We collect only the information necessary to provide our services, such as your name, contact details, and location data for ride functionality.
        </Text>
        <Text style={styles.sectionTitle}>2. Data Usage</Text>
        <Text style={styles.text}>
          Your data is used solely for providing and improving our services. We do not sell your personal information to third parties.
        </Text>
        <Text style={styles.sectionTitle}>3. Security Measures</Text>
        <Text style={styles.text}>
          We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
        </Text>
        <Text style={styles.sectionTitle}>4. User Rights</Text>
        <Text style={styles.text}>
          You have the right to access, update, or delete your personal information at any time through your account settings.
        </Text>
        <Text style={styles.sectionTitle}>5. Contact</Text>
        <Text style={styles.text}>
          For any privacy or security concerns, please contact our support team.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
}); 