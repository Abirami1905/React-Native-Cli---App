import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import ToDo from './src/screens/ToDo';

export default function App() {
  const [showSignUp, setShowSignUp] = useState(false); // controls SignUp screen
  const [currentScreen, setCurrentScreen] = useState('login'); // 'login' | 'home' | 'todo'
  const [userData, setUserData] = useState(null); // stores signed-up user info

  // Save user after signup
  const handleSignUp = (newUser) => {
    setUserData(newUser);       // store new user
    setShowSignUp(false);       // go back to login
  };

  // Validate login credentials
  const handleLogin = (email, password) => {
    if (!userData) return false; // no user registered
    if (userData.email === email && userData.password === password) {
      setCurrentScreen('home');  // successful login → go to Home
      return true;
    }
    return false;               // login failed
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <StatusBar barStyle="dark-content" />

      {currentScreen === 'login' && (
        showSignUp ? (
          <SignUp
            onBackToLogin={() => setShowSignUp(false)}
            onSignUpSuccess={handleSignUp}
          />
        ) : (
          <Login
            onSignUpPress={() => setShowSignUp(true)}
            onLoginAttempt={handleLogin}
          />
        )
      )}

      {currentScreen === 'home' && (
        <Home
          user={userData}
          onBackToLogin={() => setCurrentScreen('login')}
          onOpenToDo={() => setCurrentScreen('todo')}
        />
      )}

      {currentScreen === 'todo' && (
        <ToDo
          user={userData}
          onBack={() => setCurrentScreen('home')}
        />
      )}
    </SafeAreaView>
  );
}
