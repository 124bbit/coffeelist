import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import reviewDetails from "../screens/reviewDetails";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Sandbox from "../screens/Sandbox";
import Header from "../screens/Header";
const aboutStackScreen = createStackNavigator();

export default function aboutStack() {
  return (
    <aboutStackScreen.Navigator
      screenOptions={{
        headerTintColor: "#f1e3cb",
        headerStyle: {
          backgroundColor: "#ca5116",
          height: 60,
        },
        headerTitle: () => <Header />,
      }}
    >
      <aboutStackScreen.Screen name="About" component={About} />
      <aboutStackScreen.Screen name="Sandbox" component={Sandbox} />
    </aboutStackScreen.Navigator>
  );
}
