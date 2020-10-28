import React from "react";
import { globalStyles } from "../styles/globalStyles";
import { Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function reviewDetails({ navigation, route }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{route.params.name}</Text>
      <Text style={globalStyles.parap}>{route.params.definisi}</Text>
      <Text style={globalStyles.title}>Komposisi</Text>
      {route.params.komposisi.map((item) => {
        return (
          <Text style={globalStyles.parap2} key={item.length}>
            - {item}
          </Text>
        );
      })}

      <StatusBar style="auto" />
    </View>
  );
}
