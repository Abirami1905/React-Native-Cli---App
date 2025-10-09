import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
} from "react-native";
import styles from "./HabitStyles";

const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];

const Habit = ({ onBack, user }) => {
  const [habit, setHabit] = useState("");
  const [habits, setHabits] = useState([]);
  const [showProfile, setShowProfile] = useState(false); // 👈 controls profile modal visibility

  // Add a new habit
  const addHabit = () => {
    if (habit.trim() === "") return;
    const newHabit = {
      id: Date.now(),
      name: habit.trim(),
      progress: [false, false, false, false, false, false, false], // 7 days
    };
    setHabits([...habits, newHabit]);
    setHabit("");
  };

  // Toggle progress for a specific day
  const toggleDay = (habitId, dayIndex) => {
    const updated = habits.map((h) => {
      if (h.id === habitId) {
        const newProgress = [...h.progress];
        newProgress[dayIndex] = !newProgress[dayIndex];
        return { ...h, progress: newProgress };
      }
      return h;
    });
    setHabits(updated);
  };

  // Render each habit item
  const renderHabit = ({ item }) => (
    <View style={styles.habitItem}>
      <Text style={styles.habitText}>{item.name}</Text>

      {/* Weekly tracker grid */}
      <View style={styles.weekRow}>
        {daysOfWeek.map((day, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleDay(item.id, index)}
            style={[
              styles.dayCircle,
              item.progress[index] ? styles.dayDone : styles.dayPending,
            ]}
          >
            <Text style={styles.dayText}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.Header}>
        <Text style={styles.HeaderTxt}>HABIT TRACKER</Text>

        {/* Profile Button */}
        <TouchableOpacity style={styles.ProfileBtn} onPress={() => setShowProfile(true)}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            }}
            style={styles.ProfileBtnImg}
          />
        </TouchableOpacity>
      </View>

      {/* Input Field + Add Button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new habit"
          onChangeText={setHabit}
          value={habit}
        />

        <TouchableOpacity style={styles.addBtn} onPress={addHabit}>
          <Text style={styles.addBtnTxt}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Habit List */}
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderHabit}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Back Button */}
      <TouchableOpacity style={styles.BackBtn} onPress={onBack}>
        <Text style={styles.BackBtnTxt}>Back</Text>
      </TouchableOpacity>

      {/* Profile Modal */}
      <Modal
        transparent={true}
        visible={showProfile}
        animationType="slide"
        onRequestClose={() => setShowProfile(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>👤 Profile Info</Text>
            <Text style={styles.modalText}>Username: {user?.username || "N/A"}</Text>
            <Text style={styles.modalText}>Email: {user?.email || "N/A"}</Text>

            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setShowProfile(false)}
            >
              <Text style={styles.closeBtnTxt}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Habit;
