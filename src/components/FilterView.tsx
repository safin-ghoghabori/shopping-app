import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";
import Chip from "./Chip";

import Icons from "@expo/vector-icons/MaterialIcons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MIN_PRICE = 0;
const MAX_PRICE = 500;

const COLORS = [
  {
    color: "red",
    title: "Red",
    count: 4,
    index: 111,
  },
  {
    color: "yellow",
    title: "Yellow",
    count: 23,
    index: 112,
  },
  {
    color: "purple",
    title: "Purple",
    count: 44,
    index: 113,
  },
  {
    color: "blue",
    title: "Blue",
    count: 99,
    index: 114,
  },
  {
    color: "green",
    title: "Green",
    count: 65,
    index: 115,
  },
];

const SLEEVES = [
  { title: "Short sleeve" },
  { title: "Long sleeve" },
  { title: "Sleevless" },
];

const FilterView = () => {
  const [minPrice, SetMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(250);

  const insets = useSafeAreaInsets();

  const [selectedChipIndex, setSelectedChipIndex] = useState<number>(0);

  const handleChipSelection = (index: number) => {
    setSelectedChipIndex(index);
  };

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
        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontWeight: "600" }}>Price Range</Text>
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

      {/* Sports Filter */}
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ fontWeight: "600" }}>Sports</Text>
        <View
          style={{
            paddingTop: 16,
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 5,
          }}
        >
          {new Array(8).fill("").map((item, index) => {
            const isSelected = index === selectedChipIndex;

            return (
              <Chip
                index={index}
                isSelected={isSelected}
                handleChipSelection={handleChipSelection}
              />
            );
          })}
        </View>
      </View>

      {/* Colors Filter */}
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ fontWeight: "600" }}>Colors</Text>
        <View
          style={{
            paddingTop: 16,
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 5,
          }}
        >
          {COLORS.map((item, index) => {
            const isSelected = item.index === selectedChipIndex;

            return (
              <Chip
                index={item.index}
                isSelected={isSelected}
                handleChipSelection={handleChipSelection}
                label={item.title}
                colorCircle={
                  <View
                    style={{
                      height: 16,
                      aspectRatio: 1,
                      borderRadius: 100,
                      backgroundColor: item.color,
                    }}
                  />
                }
              />
            );
          })}
        </View>
      </View>

      {/* Sleeves Filter */}
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ fontWeight: "600" }}>Sleeves</Text>
        <View
          style={{
            paddingTop: 16,
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 5,
          }}
        >
          {SLEEVES.map((item, index) => {
            const isSelected = index === selectedChipIndex;

            return (
              <Chip
                index={index}
                isSelected={isSelected}
                handleChipSelection={handleChipSelection}
                label={item.title}
              />
            );
          })}
        </View>
      </View>

      {/* Apply Filter Button */}
      <View style={{ paddingHorizontal: 16 }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.text,
            paddingHorizontal: 26,
            borderRadius: 100,
            paddingVertical: 22,
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Text
            style={{
              color: colors.background,
              fontSize: 14,
              fontWeight: "600",
            }}
          >
            Apply filters
          </Text>
          <View
            style={{
              backgroundColor: colors.background,
              width: 40,
              aspectRatio: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 40,
              position: "absolute",
              top: 12,
              right: 12,
              bottom: 12,
            }}
          >
            <Icons name="east" size={24} color={colors.text} />
          </View>
        </TouchableOpacity>
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
