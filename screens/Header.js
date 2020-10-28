import React from "react";
import { Text, View, StyleSheet } from "react-native";

const style = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontFamily: "Balsamiq-bold",
    fontSize: 20,
    color: "#fff",
    letterSpacing: 1,
  },
});

export default function Header() {
  return (
    <View style={style.header}>
      <View>
        <Text style={style.headerText}> Coffee List</Text>
      </View>
    </View>
  );
}
