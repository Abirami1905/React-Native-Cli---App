import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './HomeStyles';

const Home = ({ user, onBackToLogin, onOpenToDo }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>

        {/* Profile button */}
        <TouchableOpacity style={styles.profileBtn}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* Welcome message */}
      <Text style={styles.welcomeText}>Welcome, {user?.name}!</Text>

      {/* To-Do List with icon */}
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828911.png' }}
          style={{ width: 50, height: 50, marginBottom: 10 }}
        />
        <TouchableOpacity style={styles.mainBtn} onPress={onOpenToDo}>
          <Text style={styles.mainBtnText}>To-Do List</Text>
        </TouchableOpacity>
      </View>

      {/* Habit Tracker with icon */}
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1484/1484428.png' }}
          style={{ width: 50, height: 50, marginBottom: 10 }}
        />
        <TouchableOpacity style={styles.mainBtn}>
          <Text style={styles.mainBtnText}>Habit Tracker</Text>
        </TouchableOpacity>
      </View>

      {/* Back to Login button */}
      <TouchableOpacity style={styles.backBtn} onPress={onBackToLogin}>
        <Text style={styles.backBtnText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
