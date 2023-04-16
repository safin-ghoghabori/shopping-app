import { View, Text, Button } from "react-native";
import React from "react";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  TapGestureHandler,
} from "react-native-gesture-handler";

type GestureHandlerType = {
  startX: number;
  startY: number;
};

const Cart = () => {
  const offset = useSharedValue(0);

  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  const wobbleSquare = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  const pressed = useSharedValue(false);
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const eventHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    GestureHandlerType
  >({
    onStart: (event, context) => {
      pressed.value = true;
      context.startX = x.value;
      context.startY = y.value;
    },
    onActive: (event, context) => {
      x.value = context.startX + event.translationX;
      y.value = context.startY + event.translationY;
    },
    onEnd: (event, context) => {
      pressed.value = false;
    },
  });

  const ballStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: withSpring(pressed.value ? "rgba(0,0,0,0.5)" : "#000"),
      transform: [{ translateX: x.value }, { translateY: y.value }],
    };
  });

  return (
    <View style={{ paddingVertical: 20, paddingHorizontal: 16 }}>
      <View style={{ borderWidth: 1 }}>
        <Animated.View
          style={[
            animatedStyle,
            { height: 50, width: 50, backgroundColor: "red" },
          ]}
        ></Animated.View>
      </View>
      <Button
        title="Move - with timing"
        onPress={() =>
          (offset.value = withTiming(Math.floor(Math.random() * 255)))
        }
      />
      <Button
        title="Move - without timing"
        onPress={() => (offset.value = Math.floor(Math.random() * 255))}
      />
      <Button
        title="Move - with spring"
        onPress={() =>
          (offset.value = withSpring(Math.floor(Math.random() * 255)))
        }
      />

      <Animated.View
        style={[
          {
            backgroundColor: "green",
            height: 150,
            aspectRatio: 1,
          },
          wobbleSquare,
        ]}
      ></Animated.View>
      <Button
        title="Wobble"
        onPress={() =>
          (rotation.value = withSequence(
            withTiming(-10),
            withRepeat(withTiming(20, { duration: 1000 }), 6, true),
            withTiming(0)
          ))
        }
      />

      <View
        style={{ height: 1, backgroundColor: "black", marginVertical: 5 }}
      />

      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View
          style={[
            ballStyles,
            {
              width: 100,
              aspectRatio: 1,
              borderRadius: 100,
              backgroundColor: "purple",
            },
          ]}
        ></Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Cart;
