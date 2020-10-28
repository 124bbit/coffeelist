import React, { useState } from "react";
import { globalStyles } from "../styles/globalStyles";
import { Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("reviewDetails");
  };
  const [kopi, setKopi] = useState([
    {
      name: "Espresso",
      rating: 5,
      definisi: "Single shot ekstrak biji kopi",
      komposisi: ["1 shot Espresso"],
      key: "1",
    },
    {
      name: "Americano",
      rating: 4,
      definisi: "Kombinasi satu shot espresso dan air panas",
      komposisi: ["2/3 Air", "1/3 Espresso"],
      key: "2",
    },
    {
      name: "Cappuccino",
      rating: 3,
      definisi: "Satu shot Espresso degan susu steam dan busa yang lebih tebal",
      komposisi: ["1/3 Milk foam", "1/3 Susu", "1/3 Espresso"],
      key: "3",
    },
    {
      name: "Latte",
      rating: 2,
      definisi: "Satu shot Espresso dengan susu steam dan busa",
      komposisi: ["Milk foam", "1/3 Susu", "2/3 Espresso"],
      key: "4",
    },
    {
      name: "Macchiato",
      rating: 1,
      definisi: "Espresso yang ditambahkan sedikit susu dengan perbadingan 4:1",
      komposisi: ["Double shot Espresso", "Susu"],
      key: "5",
    },
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={kopi}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
          >
            <Text style={globalStyles.title}>{item.name} </Text>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}
