import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './pages/Login';
import UpdateProfile from './pages/UpdateProfile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>



      <Stack.Screen name="login" component={Login}
        options={{
          headerShown: false,
        }} />
        <Stack.Screen name="updateprofile" component={UpdateProfile}
        options={{
          headerShown: false,
        }} />
        </Stack.Navigator>
        </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
});
