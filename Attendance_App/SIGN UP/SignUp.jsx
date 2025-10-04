import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './SignUpStyles';

const SignUp = ({ goToScreen, handleSignUp }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignUp = () => {
    if (name && email && password) {
      handleSignUp(name, email, password); // Save user and go to Login
      setName('');
      setEmail('');
      setPassword('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <LinearGradient colors={['#ff4e50', '#f9d423']} style={styles.gradient}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#fff"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#fff"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#fff"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={onSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text style={styles.linkText} onPress={() => goToScreen('Login')}>
            Login
          </Text>
        </Text>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default SignUp;
