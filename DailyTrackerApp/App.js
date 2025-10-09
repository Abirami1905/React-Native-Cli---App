import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import ToDo from './src/screens/ToDo';
import Habit from './src/screens/Habit';

export default function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('login');
  const [userData, setUserData] = useState(null);

  const handleSignUp = (newUser) => {
    setUserData(newUser);
    setShowSignUp(false);
  };

  const handleLogin = (email, password) => {
    if (!userData) return false;

    if (userData.email === email && userData.password === password) {
      setCurrentScreen('home');
      return true;
    }
    return false;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
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
          onOpenHabit={() => setCurrentScreen('habit')}
        />
      )}

      {currentScreen === 'todo' && (
        <ToDo
          user={userData}
          onBack={() => setCurrentScreen('home')}
        />
      )}


      {
        currentScreen === 'habit' && (
          <Habit
            user ={userData}
            onBack={()=> setCurrentScreen('home')}
          />
        )
      }
    </SafeAreaView>
  );
}
