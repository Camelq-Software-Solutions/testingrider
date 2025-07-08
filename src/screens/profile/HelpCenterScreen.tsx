import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HelpCenterScreen({ navigation }: any) {
  const handleChatSupport = () => {
    navigation.navigate('ChatBot');
  };

  const handleCallSupport = () => {
    // Replace with your support phone number
    const phoneNumber = 'tel:+1234567890';
    Linking.openURL(phoneNumber).catch(() => {
      alert('Unable to initiate call.');
    });
  };

  const handleSupportCategories = () => {
    navigation.navigate('SupportCategory');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Help Center</Text>
      <Text style={styles.text}>Find answers to your questions or get support here.</Text>
      <View style={styles.supportOptions}>
        <TouchableOpacity style={styles.supportButton} onPress={handleChatSupport}>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="#007AFF" />
          <Text style={styles.buttonText}>Chat with Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.supportButton} onPress={handleCallSupport}>
          <Ionicons name="call-outline" size={24} color="#007AFF" />
          <Text style={styles.buttonText}>Call Support</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.categoryButton} onPress={handleSupportCategories}>
        <Ionicons name="list-outline" size={22} color="#007AFF" />
        <Text style={styles.categoryButtonText}>Support Categories</Text>
      </TouchableOpacity>
      <View style={styles.defaultSection}>
        <Text style={styles.defaultTitle}>Other Help Topics</Text>
        <Text style={styles.defaultText}>More help topics will be available soon.</Text>
      </View>
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
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 24,
  },
  supportOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
  supportButton: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F0F4F8',
    borderRadius: 10,
    width: 140,
  },
  buttonText: {
    marginTop: 8,
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#EAF2FF',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    marginBottom: 24,
  },
  categoryButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  defaultSection: {
    marginTop: 32,
    alignItems: 'center',
  },
  defaultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  defaultText: {
    fontSize: 15,
    color: '#666',
  },
}); 