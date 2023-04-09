import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";

const Chip = ({ index, isSelected, handleChipSelection }) => {
  const { colors } = useTheme();

  const handleSelected = () => {
    handleChipSelection(index);
  };

  return (
    <TouchableOpacity
      style={{
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: isSelected ? colors.text : colors.background,
        borderRadius: 100,
      }}
      onPress={handleSelected}
    >
      <Text
        style={{
          color: isSelected ? colors.background : colors.text,
          fontSize: 14,
        }}
      >
        Item [{index + 1}]
      </Text>
    </TouchableOpacity>
  );
};

export default Chip;
