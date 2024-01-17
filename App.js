import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Register from "./src/screens/Register";
import LoginAccount from "./src/screens/LoginAccount";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome", headerShown: false }}
          />
            <Stack.Screen
            name="Reg"
            component={Register}
            options={{ title: "Welcome", headerShown: false }}
          />
           <Stack.Screen
            name="login"
            component={LoginAccount}
            options={{ headerShown: false }}
          />
        
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Text>Hello World</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
