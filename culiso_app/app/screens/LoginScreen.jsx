// culiso-app/app/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.success) {
        Alert.alert('로그인 성공', data.message);
        // 로그인 성공 시 다음 화면으로 이동
      } else {
        Alert.alert('로그인 실패', data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>아이디</Text>
      <TextInput value={username} onChangeText={setUsername} />
      <Text>비밀번호</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="로그인" onPress={handleLogin} />
      <Button title="회원가입" onPress={() => navigation.navigate('Signup')} />
      <Button title="계정찾기" onPress={() => navigation.navigate('FindId')} />
    </View>
  );
}