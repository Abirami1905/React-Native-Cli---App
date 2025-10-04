import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './DashboardStyles';

const Dashboard = ({ goToScreen, user }) => {
  const totalDays = user?.attendance?.length || 0;
  const presentDays = user?.attendance?.filter(a => a.status === 'Present').length || 0;
  const absentDays = totalDays - presentDays;

  return (
    <LinearGradient colors={['#ff4e50', '#f9d423']} style={styles.gradient}>
      <View style={styles.container}>

        {/* Back to Login */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#ff4e50', marginBottom: 20 }]}
          onPress={() => goToScreen('Login')}
        >
          <Text style={[styles.buttonText, { color: '#fff' }]}>Back to Login</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Welcome, {user?.name}!</Text>

        <View style={styles.summary}>
          <Text style={styles.summaryText}>Total Days: {totalDays}</Text>
          <Text style={styles.summaryText}>Present: {presentDays}</Text>
          <Text style={styles.summaryText}>Absent: {absentDays}</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => goToScreen('Attendance')}
        >
          <Text style={styles.buttonText}>Mark Attendance</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => goToScreen('Profile')}
        >
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>

      </View>
    </LinearGradient>
  );
};

export default Dashboard;
