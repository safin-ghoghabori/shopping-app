import { View, Text } from "react-native";
import React from "react";
import {
  RootStackParams,
  RootStackScreenProps,
} from "../navigation/RootNavigation";

const DetailsScreen = ({
  navigation,
  route,
}: RootStackScreenProps<"DetailsScreen">) => {
  const { id } = route.params;

  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default DetailsScreen;
