import { View, Text } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen";
import DetailsScreen from "../Screens/DetailsScreen";
import TabsNavigation, { TabsNavigationParams } from "./TabsNavigation";

export type RootStackParams = {
  TabsStack: NavigatorScreenParams<TabsNavigationParams>;
  DetailsScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="TabsStack"
        component={TabsNavigation}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="DetailsScreen" component={DetailsScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
