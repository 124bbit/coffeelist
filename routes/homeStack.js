import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import reviewDetails from "../screens/reviewDetails";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "../screens/Header";

const HomeStackScreen = createStackNavigator();

export default function homeStack() {
  return (
    <HomeStackScreen.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#ca5116",
          height: 60,
        },
        headerTitle: () => <Header />,
      }}
    >
      <HomeStackScreen.Screen name="Home" component={Home} />
      <HomeStackScreen.Screen name="Details" component={reviewDetails} />
    </HomeStackScreen.Navigator>
  );
}
