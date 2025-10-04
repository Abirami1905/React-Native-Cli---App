import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './AttendanceStyles';

const Attendance = ({ goToScreen, user, setUser }) => {
  const [students, setStudents] = useState([
    { id: '1', name: 'Student 1', status: null },
    { id: '2', name: 'Student 2', status: null },
    { id: '3', name: 'Student 3', status: null },
  ]);

  const markAttendance = (id, status) => {
    const updatedStudents = students.map(s =>
      s.id === id ? { ...s, status } : s
    );
    setStudents(updatedStudents);

    // Update user's attendance
    const today = new Date().toLocaleDateString();
    const attendanceRecord = updatedStudents.map(s => ({
      name: s.name,
      status: s.status,
      date: today,
    }));
    setUser({ ...user, attendance: attendanceRecord });
  };

  const renderItem = ({ item }) => {
    const presentSelected = item.status === 'Present';
    const absentSelected = item.status === 'Absent';

    return (
      <View style={styles.studentRow}>
        <Text style={styles.studentName}>{item.name}</Text>

        <TouchableOpacity
          style={[
            styles.attendanceBtn,
            { backgroundColor: presentSelected ? 'green' : '#4caf50' },
          ]}
          onPress={() => markAttendance(item.id, 'Present')}
        >
          <Text style={styles.attendanceText}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.attendanceBtn,
            { backgroundColor: absentSelected ? 'red' : '#f44336' },
          ]}
          onPress={() => markAttendance(item.id, 'Absent')}
        >
          <Text style={styles.attendanceText}>Absent</Text>
        </TouchableOpacity>
      </View>
    );
  };

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

        <Text style={styles.title}>Attendance</Text>

        <FlatList
          data={students}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </LinearGradient>
  );
};

export default Attendance;
