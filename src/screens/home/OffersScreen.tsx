import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, TITLE_COLOR } from '../../constants/Colors';
import { Layout } from '../../constants/Layout';
import { useUser } from '@clerk/clerk-expo';

export default function OffersScreen({ navigation }: any) {
  const { user } = useUser();

  // Helper to get first 4 letters of name (uppercased, pad if needed)
  const getNamePart = () => {
    const name = user?.firstName || user?.fullName || 'USER';
    return name.substring(0, 4).toUpperCase().padEnd(4, 'X');
  };
  // Helper to get last 4 digits of phone number
  const getPhonePart = () => {
    const phone = user?.primaryPhoneNumber?.phoneNumber || '';
    const digits = phone.replace(/\D/g, '');
    return digits.slice(-4).padStart(4, '0');
  };
  const referralCode = `${getNamePart()}${getPhonePart()}`;

  const offers = [
    {
      id: 2,
      title: 'Refer & Earn',
      description: 'Refer a friend and both of you get $5 ride credit after their first trip.',
      expires: 'No expiry',
    },
  ];

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Use my referral code ${referralCode} to sign up and get rewards on your first ride! Download the app now.`,
      });
    } catch (error) {
      // Optionally handle error
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} accessibilityLabel="Back">
          <Ionicons name="arrow-back" size={24} color={TITLE_COLOR} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Offers</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.content}>
        {offers.map((offer) => (
          <View key={offer.id} style={styles.offerCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={styles.offerTitle}>{offer.title}</Text>
              {/* Share button */}
              <TouchableOpacity onPress={handleShare} accessibilityLabel="Share Referral Code">
                <Ionicons name="share-social-outline" size={24} color={Colors.primary} />
              </TouchableOpacity>
            </View>
            <Text style={styles.offerDescription}>{offer.description}</Text>
            {/* Referral code section */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
              <Text style={{ fontWeight: 'bold', color: Colors.primary, fontSize: 16, marginRight: 8 }}>Your Code:</Text>
              <Text style={{ fontFamily: 'monospace', fontSize: 16, backgroundColor: Colors.gray100, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 }}>{referralCode}</Text>
            </View>
            <Text style={styles.offerExpires}>{offer.expires}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Layout.spacing.lg,
    paddingTop: Layout.spacing.xl,
    paddingBottom: Layout.spacing.md,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  headerTitle: {
    fontSize: Layout.fontSize.xl,
    fontWeight: 'bold',
    color: TITLE_COLOR,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: Layout.spacing.lg,
    width: '100%',
  },
  placeholder: {
    color: Colors.gray400,
    fontSize: Layout.fontSize.md,
    textAlign: 'center',
  },
  offerCard: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: Layout.spacing.lg,
    marginBottom: Layout.spacing.lg,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  offerTitle: {
    fontSize: Layout.fontSize.lg,
    fontWeight: 'bold',
    color: TITLE_COLOR,
    marginBottom: 4,
  },
  offerDescription: {
    fontSize: Layout.fontSize.md,
    color: Colors.gray700,
    marginBottom: 4,
  },
  offerExpires: {
    fontSize: Layout.fontSize.sm,
    color: Colors.gray500,
  },
}); 