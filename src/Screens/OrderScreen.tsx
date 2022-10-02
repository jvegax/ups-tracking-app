import { Text, SafeAreaView, StyleSheet, Platform, StatusBar, ScrollView } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import React, { memo } from "react";

const OrderScreen = () => {
  const tw = useTailwind();
  return (
    <ScrollView>
      <Text style={tw("font-bold text-3xl")}>Orders screen! 📦</Text>
    </ScrollView>
  );
};


export default memo(OrderScreen);
