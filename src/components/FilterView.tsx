import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";

const MIN_PRICE = 0;
const MAX_PRICE = 500;

const FilterView = () => {
  const [minPrice, SetminPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(250);

  const { colors } = useTheme();

  return (
    <View style={{ gap: 20 }}>
      {/* Titles */}
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 16,
          alignItems: "center",
        }}
      >
        <Text style={{ flex: 1, fontWeight: "600", fontSize: 16 }}>
          Filters
        </Text>
        <TouchableOpacity>
          <Text>REST</Text>
        </TouchableOpacity>
      </View>

      {/* Range Selector */}
      <View style={{ paddingHorizontal: 16 }}>
        <View style={{ marginBottom: 16 }}>
          <Text>Price Range</Text>
        </View>
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: colors.border,
            position: "relative",
          }}
        >
          <View
            style={{
              position: "absolute",
              left: `${(100 * minPrice) / MAX_PRICE}%`,
              width: `${(100 * (maxPrice - minPrice)) / MAX_PRICE}%`,
              height: "100%",
              backgroundColor: colors.primary,
            }}
          />

          <View style={{ position: "absolute", left: "10%" }}>
            <SliderHandle />
          </View>
          <View style={{ position: "absolute", left: "50%" }}>
            <SliderHandle />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 16,
            alignItems: "center",
          }}
        >
          <Text style={{ opacity: 0.5, color: colors.text }}>${MIN_PRICE}</Text>
          <Text style={{ opacity: 0.5, color: colors.text }}>${MAX_PRICE}</Text>
        </View>
      </View>
    </View>
  );
};

export default FilterView;

const SliderHandle = () => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        position: "absolute",
        left: "10%",
        height: 24,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.primary,
        transform: [{ translateX: -12 }, { translateY: -12 }],
      }}
    >
      <View
        style={{
          width: 3,
          height: 3,
          borderRadius: 10,
          backgroundColor: colors.primary,
        }}
      />
    </View>
  );
};
