import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigation from "./routes/navDrawer";

const getFonts = () => {
  return Font.loadAsync({
    "Balsamiq-regular": require("./assets/fonts/BalsamiqSans-Regular.ttf"),
    "Balsamiq-bold": require("./assets/fonts/BalsamiqSans-Bold.ttf"),
    "Balsamiq-italic": require("./assets/fonts/BalsamiqSans-Italic.ttf"),
  });
};

export default function App() {
  const [fontsloaded, setFontsloaded] = useState(false);

  if (fontsloaded) {
    return <Navigation />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setFontsloaded(true);
        }}
      />
    );
  }
}
