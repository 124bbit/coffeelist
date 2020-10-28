import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import homeStack from "./homeStack";
import aboutStack from "./aboutStack";
import { Ionicons } from "@expo/vector-icons";
const tab = createBottomTabNavigator();

export default function navDrawer() {
  return (
    <NavigationContainer>
      <tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home";
            } else if (route.name === "About") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            }
            // else if (route.name === "reviewDetails") {
            //   iconName = focused ? "ios-ribbon" : "ios-ribbon";
            // }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#581c0c",
          inactiveTintColor: "gray",
        }}
      >
        <tab.Screen name="Home" component={homeStack} />
        <tab.Screen name="About" component={aboutStack} />
      </tab.Navigator>
    </NavigationContainer>
  );
}
