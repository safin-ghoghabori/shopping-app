import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";

const Chip = ({
  index,
  isSelected,
  handleChipSelection,
  label,
  colorCircle,
}) => {
  const { colors } = useTheme();

  const handleSelected = () => {
    handleChipSelection(index);
  };

  return (
    <TouchableOpacity
      style={{
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: isSelected ? colors.text : colors.background,
        borderRadius: 100,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        gap: 6,
      }}
      onPress={handleSelected}
    >
      {colorCircle ? colorCircle : null}
      <Text
        style={{
          color: isSelected ? colors.background : colors.text,
          fontSize: 14,
        }}
      >
        {!!label ? label : `Item [${index + 1}]`}
      </Text>
    </TouchableOpacity>
  );
};

export default Chip;
