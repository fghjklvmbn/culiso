// culiso-app/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/screens/LoginScreen';
import SignupScreen from './app/screens/SignupScreen';
import FindIdScreen from './app/screens/FindIdScreen';
import FindPasswordScreen from './app/screens/FindPasswordScreen';
import SignupSuccessScreen from './app/screens/SignupSuccessScreen';
import IdResultScreen from './app/screens/IdResultScreen';
import PasswordResultScreen from './app/screens/PasswordResultScreen';
import { SafeAreaView, View, Text } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Signup" component={SignupScreen} />
//         <Stack.Screen name="SignupSuccess" component={SignupSuccessScreen} />
//         <Stack.Screen name="FindId" component={FindIdScreen} />
//         <Stack.Screen name="FindPassword" component={FindPasswordScreen} />
//         <Stack.Screen name="IdResult" component={IdResultScreen} />
//         <Stack.Screen name="PasswordResult" component={PasswordResultScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }