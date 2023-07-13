import { useTheme } from "@react-navigation/native";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MasonryList from "reanimated-masonry-list";
import { BlurView } from "expo-blur";

import Icons from "@expo/vector-icons/MaterialIcons";
import { useCallback, useRef, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBackdrop from "../components/CustomBackdrop";
import FilterView from "../components/FilterView";
import { TabsStackScreenProps } from "../navigation/TabsNavigation";

const AVATAR_URL =
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

const categories = [
  "Clothing",
  "Shoes",
  "Accessories",
  "Accessories-1",
  "Accessories-2",
  "Accessories-3",
];

const HomeScreen = ({ route, navigation }: TabsStackScreenProps<"Home">) => {
  const { colors } = useTheme();
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleOpenBottomSheetModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const renderCategories = ({
    item,
    index,
  }: {
    item: string;
    index: number;
  }) => {
    const isSelected = selectedCategoryIndex === index;
    return (
      <TouchableOpacity
        key={index}
        style={{
          backgroundColor:
            selectedCategoryIndex === index ? colors.primary : colors.card,
          paddingHorizontal: 24,
          paddingVertical: 16,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
          borderWidth: isSelected ? 0 : 1,
          borderColor: colors.border,
        }}
        onPress={() => setSelectedCategoryIndex(index)}
      >
        <Text
          style={{
            color:
              selectedCategoryIndex === index ? colors.background : colors.text,
            fontWeight: "600",
            fontSize: 16,
            opacity: isSelected ? 1 : 0.5,
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderMesonaryList = ({ item, i }: any) => {
    return (
      <TouchableOpacity style={{ padding: 6 }}>
        <View
          style={{
            aspectRatio: i === 0 ? 1 : 2 / 3,
            position: "relative",
            overflow: "hidden",
            borderRadius: 24,
          }}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1559893088-c0787ebfc084?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80",
            }}
            resizeMode="cover"
            style={StyleSheet.absoluteFill}
          />

          <View style={[StyleSheet.absoluteFill, { padding: 14 }]}>
            {/* Text and Favorite Icon */}
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1, fontSize: 12, fontWeight: "600" }}>
                PUMA Everyday Hussle
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  height: 32,
                  aspectRatio: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 100,
                }}
              >
                <Icons name="favorite-outline" size={20} color={colors.text} />
              </TouchableOpacity>
            </View>

            {/* Extra View to adjust set top and bottom View */}
            <View style={{ flex: 1 }} />

            {/* Price Tab */}
            <BlurView
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: 12,
                borderRadius: 100,
                overflow: "hidden",
              }}
              intensity={30}
            >
              <Text
                style={{
                  flex: 1,
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: 12,
                }}
              >
                $165.00
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 20,
                  paddingVertical: 6,
                  borderRadius: 100,
                }}
              >
                <Icons name="shopping-bag" size={20} color={colors.text} />
              </TouchableOpacity>
            </BlurView>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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
                fontSize: 14,
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

        {/* Search bar and Filter button*/}
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
            onPress={handleOpenBottomSheetModal}
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
              marginBottom: 12,
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
              <Card
                price={120}
                imageUrl={
                  "https://plus.unsplash.com/premium_photo-1668613403417-a3085b52fe89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                }
                onPress={() => {
                  navigation.navigate("DetailsScreen", {
                    id: "123",
                  });
                }}
              />
            </View>
            <View style={{ flex: 1, gap: 12 }}>
              <Card
                price={170}
                imageUrl={
                  "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                }
                onPress={() => {
                  navigation.navigate("DetailsScreen", {
                    id: "124",
                  });
                }}
              />
              <Card
                price={100}
                imageUrl={
                  "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                }
                onPress={() => {
                  navigation.navigate("DetailsScreen", {
                    id: "125",
                  });
                }}
              />
            </View>
          </View>
        </View>

        {/* Categories */}
        <FlatList
          data={categories}
          renderItem={renderCategories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 12,
            paddingHorizontal: 16,
          }}
        />

        {/* Mesonary */}
        <MasonryList
          data={[1, 2, 3, 4, 5, 6]}
          keyExtractor={(item): string => item}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={renderMesonaryList}
          onEndReachedThreshold={0.1}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 12,
          }}
        />

        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={["80%"]}
          index={0}
          backdropComponent={(props) => <CustomBackdrop {...props} />}
        >
          <FilterView />
        </BottomSheetModal>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const Card = ({
  price,
  imageUrl,
  onPress,
}: {
  price: number;
  imageUrl: string;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
        borderRadius: 24,
      }}
    >
      <Image
        source={{
          uri: imageUrl,
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

      <View
        style={{
          position: "absolute",
          left: 12,
          top: 16,
          backgroundColor: "rgba(0,0,0,0.3)",
          paddingVertical: 10,
          paddingHorizontal: 16,
          borderRadius: 100,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}>
          $ {price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
