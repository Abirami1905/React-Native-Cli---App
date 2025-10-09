import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './ToDoStyles';

const ToDo = ({ onBack }) => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = () => {
    if (task.trim() === '') return;
    const newTask = { id: Date.now(), text: task.trim(), completed: false };
    setTasks([...tasks, newTask]);
    setTask('');
  };

  // Toggle completion when tapped
  const toggleTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>TO-DO LIST</Text>

        {/* Profile Button */}
        <TouchableOpacity style={styles.profileBtn}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }}
            style={styles.profileImg}
          />
        </TouchableOpacity>
      </View>

      {/* Input Field + Add Button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Enter your task'
          value={task}              // ✅ fixed
          onChangeText={setTask}
        />

        <TouchableOpacity style={styles.addBtn} onPress={addTask}>
          <Text style={styles.addBtnTxt}>Add</Text>
        </TouchableOpacity>
      </View>
      
      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[
            styles.taskItem,
            item.completed && styles.completedTask
          ]}>
            {/* Tap text to toggle */}
            <TouchableOpacity onPress={() => toggleTask(item.id)} style={{ flex: 1 }}>
              <Text style={[
                styles.taskText,
                item.completed && styles.completedText
              ]}>
                {item.text}
              </Text>
            </TouchableOpacity>

            {/* Delete Button */}
            <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.deleteBtn}>
              <Text style={styles.deleteBtnText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      {/* Back Button */}
      <TouchableOpacity style={styles.backBtn} onPress={onBack}>
        <Text style={styles.backBtnTxt}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDo;
