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
      <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
        {/* Header */}
        <View
          style={{
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

          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 8,
                color: colors.text,
              }}
              numberOfLines={1}
            >
              Hi, James 👋{" "}
            </Text>
            <Text
              style={{ color: colors.text, opacity: 0.75, fontSize: 11 }}
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
              flex: 1,
              flexDirection: "row",
              borderWidth: 1,
              height: 52,
              borderRadius: 52,
              borderColor: colors.border,
              alignItems: "center",
              gap: 12,
              paddingHorizontal: 24,
            }}
          >
            <Icons
              name="search"
              size={24}
              color={colors.text}
              style={{ opacity: 0.5 }}
            />
            <Text
              style={{
                flex: 1,
                opacity: 0.5,
                fontSize: 16,
                color: colors.text,
              }}
            >
              Search
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              backgroundColor: "black",
              borderRadius: 52,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icons name="tune" size={24} color={colors.background} />
          </TouchableOpacity>
        </View>

        {/* Grid View Area */}
        <View
          style={{
            paddingHorizontal: 24,
          }}
        >
          {/* Title */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              New Collections
            </Text>
            <TouchableOpacity>
              <Text>See all</Text>
            </TouchableOpacity>
          </View>

          {/* Card */}
          <View style={{ flexDirection: "row", height: 200, gap: 12 }}>
            <View style={{ flex: 1 }}>
              <Card />
            </View>
            <View style={{ flex: 1, gap: 12 }}>
              <Card />
              <Card />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const Card = () => {
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
        borderRadius: 24,
      }}
    >
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        }}
        resizeMode="cover"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      />
    </View>
  );
};
