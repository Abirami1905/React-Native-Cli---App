import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './LoginStyles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}></View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login to your Account</Text>
        <Text style={styles.subtitle}>
          Get started with our app, just create an account and enjoy the experience.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.inputField}
          placeholder="name@gmail.com"
          placeholderTextColor={'#0b0b0bff'}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          placeholderTextColor={'#0b0b0bff'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.signInBtn}>
        <Text style={styles.signInBtnText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.separator}>
        <View style={styles.line} />
        <Text style={styles.separatorText}>Or</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.signInGgl}>
        <Text>Sign In with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInApl}>
        <Text>Sign In with Apple</Text>
      </TouchableOpacity>

      <Text style={styles.note}>Terms of use & Conditions</Text>
    </View>
  );
};

export default Login;
