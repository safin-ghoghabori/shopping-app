import React, { useMemo } from "react";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";

const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
  const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
  const scrollBottomSheet = useSharedValue(0);

  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: `rgba(0,0,0,${interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, 0.5],
      Extrapolate.CLAMP
    )})`,
  }));

  const blurViewProps = useAnimatedProps(() => ({
    intensity: interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, 20],
      Extrapolate.CLAMP
    ),
  }));

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: "rgba(0,0,0,0.5)",
      },
    ],
    [style]
  );

  return (
    <AnimatedBlurView animatedProps={blurViewProps} style={containerStyle} />
  );
};

export default CustomBackdrop;
