import { useTheme } from "@react-navigation/native";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Icons from "@expo/vector-icons/MaterialIcons";

const AVATAR_URL =
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

const HomeScreen = () => {
  const { colors } = useTheme();

  return (
    <ScrollView>
      <SafeAreaView>
        <View
          style={{
            paddingVertical: 24,
            paddingHorizontal: 24,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Image
            source={{ uri: AVATAR_URL }}
            style={{ width: 52, aspectRatio: 1, borderRadius: 52 }}
          />

          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 8,
                color: colors.text,
              }}
              numberOfLines={1}
            >
              Hi, James{" "}
            </Text>
            <Text
              style={{ color: colors.text, opacity: 0.75 }}
              numberOfLines={1}
            >
              Discover fashions that suit your style
            </Text>
          </View>

          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Icons name="notifications" size={28} color={colors.text} />
          </TouchableOpacity>
        </View>

        {/* Search bar */}
        <View style={{ flexDirection: "row", paddingHorizontal: 24, gap: 24 }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              height: 52,
              borderRadius: 52,
              borderColor: colors.border,
              alignItems: "center",
              flex: 1,
              gap: 12,
              paddingHorizontal: 24,
            }}
          ></TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
