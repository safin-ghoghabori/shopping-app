import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  RootStackParams,
  RootStackScreenProps,
} from "../navigation/RootNavigation";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import { StatusBar } from "expo-status-bar";
import BottomSheet from "@gorhom/bottom-sheet";

const DetailsScreen = ({
  navigation,
  route,
}: RootStackScreenProps<"DetailsScreen">) => {
  const { id } = route.params;
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1613940102170-122544f054e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3543&q=80",
        }}
        style={{ flex: 1 }}
      />

      <StatusBar style="light" />

      <SafeAreaView
        edges={["top"]}
        style={{ position: "absolute", top: 0, left: 0, right: 0 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            gap: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#fff",
            }}
          >
            <Icons name="arrow-back" size={24} color={"#fff"} />
          </TouchableOpacity>

          {/* temp view */}
          <View style={{ flex: 1 }} />

          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#fff",
            }}
          >
            <Icons name="arrow-back" size={24} color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#fff",
            }}
          >
            <Icons name="arrow-back" size={24} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <BottomSheet
        snapPoints={[60, 400]}
        index={1}
        detached={true}
        bottomInset={insets.bottom + 5}
        style={{ marginHorizontal: 22 }}
        backgroundStyle={{
          borderRadius: 20,
          backgroundColor: colors.background,
        }}
      >
        <View style={{ padding: 16 }}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default DetailsScreen;
