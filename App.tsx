import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import HomeScreen from "./src/Screens/HomeScreen";
import DetailsScreen from "./src/Screens/DetailsScreen";
import RootNavigation from "./src/navigation/RootNavigation";
import { useMemo } from "react";

export default function App() {
  console.log("default...", DefaultTheme);
  const theme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: "#f5f5f5",
        text: "#191919",
        border: "#D9D9D9",
        primary: "#191919",
      },
    }),
    []
  );

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RootNavigation />
        <StatusBar style="dark" />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
