import { useNavigation } from '@react-navigation/native';
import HeaderLogin from '../Layout/HeaderLogin';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet
} from 'react-native';

export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    navigation.navigate('DashboardHome'); 
  };

  return (
    <ImageBackground
      source={require('../../assets/Login.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
     
      <HeaderLogin></HeaderLogin>
  
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>Login Admin</Text>

          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#ccc"
            value={username}
            onChangeText={setUsername}
          />
          <Text style={styles.label}>Username</Text>

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.label}>Password</Text>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
  
        </View>
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(33, 37, 41, 0.8)',
    padding: 20,
    borderRadius: 10,
    width: '85%',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },

  input: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  label: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#198754',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  registerLink: {
    marginTop: 16,
    alignItems: 'center',
  },
  registerText: {
    color: '#fff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});