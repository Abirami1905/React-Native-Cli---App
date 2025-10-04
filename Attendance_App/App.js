import React, { useState } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Dashboard from './src/screens/Dashboard';
import Attendance from './src/screens/Attendance';
import Profile from './src/screens/Profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login'); // default screen
  const [currentUser, setCurrentUser] = useState(null); // logged-in user
  const [registeredUser, setRegisteredUser] = useState(null); // saved after signup

  // SignUp: save user in memory and go to Login
  const handleSignUp = (name, email, password) => {
    setRegisteredUser({ name, email, password, attendance: [] });
    alert('Account created successfully! Please log in.');
    setCurrentScreen('Login');
  };

  // Login: check credentials
  const handleLogin = (email, password) => {
    if (!registeredUser) {
      alert('No user found. Please sign up first.');
      return false;
    }

    if (email === registeredUser.email && password === registeredUser.password) {
      setCurrentUser(registeredUser);
      alert(`Welcome back, ${registeredUser.name}!`);
      return true;
    } else {
      alert('Email or password is incorrect.');
      return false;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />

      {currentScreen === 'Login' && (
        <Login goToScreen={setCurrentScreen} handleLogin={handleLogin} />
      )}

      {currentScreen === 'SignUp' && (
        <SignUp goToScreen={setCurrentScreen} handleSignUp={handleSignUp} />
      )}

      {currentScreen === 'Dashboard' && currentUser && (
        <Dashboard goToScreen={setCurrentScreen} user={currentUser} />
      )}

      {currentScreen === 'Attendance' && currentUser && (
        <Attendance
          goToScreen={setCurrentScreen}
          user={currentUser}
          setUser={setCurrentUser} // allows attendance update
        />
      )}

      {currentScreen === 'Profile' && currentUser && (
        <Profile goToScreen={setCurrentScreen} user={currentUser} />
      )}
    </SafeAreaView>
  );
}
