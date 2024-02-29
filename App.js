import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./screens/login";
import Home from "./screens/home";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userInfo = await AsyncStorage.getItem("user");
        if (userInfo !== null) {
          setUser(JSON.parse(userInfo));
        }
      } catch (error) {
        console.error("Error retrieving user data:", error);
      }
    };
    checkUser();
  }, []);

  const saveUser = async (userInfo) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(userInfo));
      setUser(userInfo);
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {(props) => <Login {...props} saveUser={saveUser} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {(props) => <Home {...props} user={user} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
