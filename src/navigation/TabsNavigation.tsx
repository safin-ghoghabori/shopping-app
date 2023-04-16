import { View, Text } from "react-native";
import React from "react";

import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import Icons from "@expo/vector-icons/MaterialIcons";
import Cart from "../Screens/Cart";
import { CompositeScreenProps } from "@react-navigation/native";
import { RootStackScreenProps } from "./RootNavigation";

export type TabsNavigationParams = {
  Home: undefined;
  Cart: undefined;
  Payment: undefined;
  Profile: undefined;
};

const TabsStack = createBottomTabNavigator<TabsNavigationParams>();

export type TabsStackScreenProps<T extends keyof TabsNavigationParams> =
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavigationParams, T>,
    RootStackScreenProps<"TabsStack">
  >;

const TabsNavigation = () => {
  return (
    <TabsStack.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <TabsStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return <Icons name="home" {...props} />;
          },
        }}
      />
      <TabsStack.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon(props) {
            return <Icons name="shopping-cart" {...props} />;
          },
        }}
      />
      <TabsStack.Screen
        name="Payment"
        component={Temp}
        options={{
          tabBarIcon(props) {
            return <Icons name="account-balance-wallet" {...props} />;
          },
        }}
      />
      <TabsStack.Screen
        name="Profile"
        component={Temp}
        options={{
          tabBarIcon(props) {
            return <Icons name="person" {...props} />;
          },
        }}
      />
    </TabsStack.Navigator>
  );
};

export default TabsNavigation;

// Temp component
const Temp = () => {
  return <View />;
};
