import { Text, SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import React from "react";

const OrderScreen = () => {
  const tw = useTailwind();
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Text style={tw("font-bold text-3xl")}>Orders screen!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});

export default OrderScreen;
