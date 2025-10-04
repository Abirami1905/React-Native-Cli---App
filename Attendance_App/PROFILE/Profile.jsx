import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './ProfileStyles';

const Profile = ({ goToScreen, user }) => {
  return (
    <LinearGradient colors={['#ff4e50', '#f9d423']} style={styles.gradient}>
      <View style={styles.container}>

        {/* Back Button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#ff4e50', marginBottom: 20 }]}
          onPress={() => goToScreen('Dashboard')}
        >
          <Text style={[styles.buttonText, { color: '#fff' }]}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Profile</Text>

        <Text style={styles.info}>Name: {user?.name}</Text>
        <Text style={styles.info}>Email: {user?.email}</Text>

      </View>
    </LinearGradient>
  );
};

export default Profile;
