import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TermsOfPolicyScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Terms of Policy</Text>
        <Text style={styles.text}>
          Welcome to our app! By using this application, you agree to the following terms and conditions:
        </Text>
        <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
        <Text style={styles.text}>
          By accessing or using our services, you agree to be bound by these terms. If you do not agree, please do not use the app.
        </Text>
        <Text style={styles.sectionTitle}>2. User Responsibilities</Text>
        <Text style={styles.text}>
          You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.
        </Text>
        <Text style={styles.sectionTitle}>3. Prohibited Activities</Text>
        <Text style={styles.text}>
          You agree not to misuse the app, including but not limited to: hacking, spamming, or violating any laws.
        </Text>
        <Text style={styles.sectionTitle}>4. Modifications</Text>
        <Text style={styles.text}>
          We reserve the right to modify these terms at any time. Continued use of the app constitutes acceptance of the new terms.
        </Text>
        <Text style={styles.sectionTitle}>5. Termination</Text>
        <Text style={styles.text}>
          We may terminate or suspend your access to the app at our discretion, without notice, for conduct that we believe violates these terms.
        </Text>
        <Text style={styles.sectionTitle}>6. Contact</Text>
        <Text style={styles.text}>
          If you have any questions about these terms, please contact our support team.
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