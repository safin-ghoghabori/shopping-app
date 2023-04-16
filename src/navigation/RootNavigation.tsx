import { View, Text } from "react-native";
import React from "react";

import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen";
import DetailsScreen from "../Screens/DetailsScreen";
import TabsNavigation, { TabsNavigationParams } from "./TabsNavigation";

export type RootStackParams = {
  TabsStack: NavigatorScreenParams<TabsNavigationParams>;
  DetailsScreen: {
    id: string;
  };
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export type RootStackScreenProps<T extends keyof RootStackParams> =
  NativeStackScreenProps<RootStackParams, T>;

const RootNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="TabsStack"
        component={TabsNavigation}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
