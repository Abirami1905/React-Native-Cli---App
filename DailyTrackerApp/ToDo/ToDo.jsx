import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from './ToDoStyles';

const ToDo = ({ onBack }) => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  // Render each task item
  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>To-Do List</Text>

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Enter a task"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addBtn} onPress={addTask}>
          <Text style={styles.addBtnText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        style={styles.taskList}
      />

      {/* Back Button */}
      <TouchableOpacity style={styles.backBtn} onPress={onBack}>
        <Text style={styles.backBtnText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDo;
