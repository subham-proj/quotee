import React, { useState, useEffect } from "react";
import { Dimensions, Text, View, Animated, PanResponder } from "react-native";
import styles from "../styles";
import generateRandomPastelColor from "../utils/colorGenerator";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function SwipeableCard({ loading, quote, setSwipeEvent }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pan = React.useRef(new Animated.ValueXY()).current;

  const panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > 120) {
          handleSwipeRight();
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const handleSwipeRight = () => {
    Animated.timing(pan, {
      toValue: { x: SCREEN_WIDTH, y: 0 },
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setSwipeEvent((swipeEvent) => swipeEvent + 1);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      resetPosition();
    });
  };

  const resetPosition = () => {
    Animated.spring(pan, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  const backgroundColor = generateRandomPastelColor();

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.customCard,
        { backgroundColor },
        { transform: [{ translateX: pan.x }] },
      ]}
    >
      <View>
        {loading ? (
          <ActivityIndicator animating={true} color={MD2Colors.red800} />
        ) : (
          <Text style={styles.content}>{quote}</Text>
        )}
      </View>
    </Animated.View>
  );
}
