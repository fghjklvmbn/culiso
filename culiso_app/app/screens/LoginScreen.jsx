// culiso-app/app/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  // 이미지 소스파일
  const img = "";

  // 자동로그인 스위치 구성
  const [autoLogin, setAutoLogin] = useState(false);
  const toggleSwitch = () => setAutoLogin(previousState => !previousState);
  
  // username, password 수집(useState)
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
    // 아이디
      <View style={styles.container}>
       <Image 
         source={{uri: img}} // 로고 이미지 삽입
         style={styles.logo}
       />
       <Text style={styles.label}>아이디</Text>
       <TextInput
         style={styles.input}
         placeholder="아이디"
         value={username} 
         onChangeText={setUsername}
       />
      
      <Text style={styles.label}>비밀번호</Text>
       <TextInput
         style={styles.input}
         placeholder="비밀번호"
         secureTextEntry={true}
         value={password} 
         onChangeText={setPassword}
       />
       <View style={styles.autoLoginContainer}>
         <Text style={styles.autoLoginText}>자동로그인</Text>
         <Switch
           onValueChange={toggleSwitch}
           value={autoLogin}
           thumbColor={autoLogin ? "#fff" : "#fff"}
           trackColor={{ false: "#767577", true: "#0DAD83" }}
         />
       </View>

       <Button style={styles.signupButton}>
         <Text style={styles.signupText}>계정이 없으신가요? 회원가입</Text>
       </Button>
       <Button style={styles.loginButton}>
         <Text style={styles.loginButtonText}>로그인</Text>
       </Button>
       <Button style={styles.forgotButton}>
         <Text style={styles.forgotText}>아이디 및 비밀번호를 잊으셨나요? 계정찾기</Text>
       </Button>
    
      
      {/* <Button title="로그인" onPress={handleLogin} />
      <Button title="회원가입" onPress={() => navigation.navigate('Signup')} />
      <Button title="계정찾기" onPress={() => navigation.navigate('FindId')} /> */}
      </View>
  );
}


// 스타일 지정 구역
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginBottom: 5,
    fontSize: 14,
    color: '#000',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  autoLoginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  autoLoginText: {
    fontSize: 14,
    marginRight: 10,
  },
  signupButton: {
    marginBottom: 20,
  },
  signupText: {
    fontSize: 14,
    color: '#000',
    textDecorationLine: 'underline',
  },
  loginButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotButton: {
    marginBottom: 20,
  },
  forgotText: {
    fontSize: 14,
    color: '#000',
    textDecorationLine: 'underline',
  },
});




// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, Image } from 'react-native';

// const LoginScreen = () => {
//   const [autoLogin, setAutoLogin] = useState(false);

//   const toggleSwitch = () => setAutoLogin(previousState => !previousState);

//   return (
//     <View style={styles.container}>
//       <Image 
//         source={require('./path_to_your_logo_image.png')} // 로고 이미지 경로를 여기에 넣으세요
//         style={styles.logo}
//       />
//       <Text style={styles.label}>아이디</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="아이디"
//       />
//       <Text style={styles.label}>비밀번호</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="비밀번호"
//         secureTextEntry={true}
//       />
//       <View style={styles.autoLoginContainer}>
//         <Text style={styles.autoLoginText}>자동로그인</Text>
//         <Switch
//           onValueChange={toggleSwitch}
//           value={autoLogin}
//           thumbColor={autoLogin ? "#fff" : "#fff"}
//           trackColor={{ false: "#767577", true: "#0DAD83" }}
//         />
//       </View>
//       <TouchableOpacity style={styles.signupButton}>
//         <Text style={styles.signupText}>계정이 없으신가요? 회원가입</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.loginButton}>
//         <Text style={styles.loginButtonText}>로그인</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.forgotButton}>
//         <Text style={styles.forgotText}>아이디 및 비밀번호를 잊으셨나요? 계정찾기</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 50,
//     backgroundColor: '#fff',
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginBottom: 30,
//   },
//   label: {
//     alignSelf: 'flex-start',
//     marginLeft: 5,
//     marginBottom: 5,
//     fontSize: 14,
//     color: '#000',
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: '#000',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   autoLoginContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   autoLoginText: {
//     fontSize: 14,
//     marginRight: 10,
//   },
//   signupButton: {
//     marginBottom: 20,
//   },
//   signupText: {
//     fontSize: 14,
//     color: '#000',
//     textDecorationLine: 'underline',
//   },
//   loginButton: {
//     width: '100%',
//     height: 45,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   forgotButton: {
//     marginBottom: 20,
//   },
//   forgotText: {
//     fontSize: 14,
//     color: '#000',
//     textDecorationLine: 'underline',
//   },
// });

// export default LoginScreen;
