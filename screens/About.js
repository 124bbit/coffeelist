import React from "react";
import { globalStyles } from "../styles/globalStyles";
import { Text, View, Button, Linking } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function About({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>About </Text>
      <Text style={globalStyles.titleabout}>
        Coffee List adalah mini project untuk saya belajar react native
      </Text>
      <Text style={globalStyles.titleabout}>
        {" "}
        Github:{" "}
        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("https://github.com/124bbit")}
        >
          Robit Hussalam
        </Text>
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}
