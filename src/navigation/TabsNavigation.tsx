import { View, Text } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import Icons from "@expo/vector-icons/MaterialIcons";
import Cart from "../Screens/Cart";

export type TabsNavigationParams = {
  Home: undefined;
  Cart: undefined;
  Payment: undefined;
  Profile: undefined;
};

const TabStack = createBottomTabNavigator<TabsNavigationParams>();

const TabsNavigation = () => {
  return (
    <TabStack.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <TabStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return <Icons name="home" {...props} />;
          },
        }}
      />
      <TabStack.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon(props) {
            return <Icons name="shopping-cart" {...props} />;
          },
        }}
      />
      <TabStack.Screen
        name="Payment"
        component={Temp}
        options={{
          tabBarIcon(props) {
            return <Icons name="account-balance-wallet" {...props} />;
          },
        }}
      />
      <TabStack.Screen
        name="Profile"
        component={Temp}
        options={{
          tabBarIcon(props) {
            return <Icons name="person" {...props} />;
          },
        }}
      />
    </TabStack.Navigator>
  );
};

export default TabsNavigation;

// Temp component
const Temp = () => {
  return <View />;
};
