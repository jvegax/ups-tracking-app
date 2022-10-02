import { View, Text } from "react-native";
import React, { memo, FC, useLayoutEffect } from "react";
import { useTailwind } from "tailwind-rn/dist";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { TabStackParamList } from "../Navigator/TabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigator/RootNavigator";
import DeliveryCard from "./DeliveryCard";

type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">;

type OrderScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

const OrderScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<OrderScreenNavigationProp>();
  const {
    params: { order },
  } = useRoute<OrderScreenRouteProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: order.trackingItems.customer.name,
      headerTintColor: "#EB6A7C",
      headerTitleStyle: { color: "black"},
      headerBackTitle: "Deliveries",
    })
  }, [order]);
  return (
    <View>
      <DeliveryCard order={order} fullWith={true} />
    </View>
  );
};

export default memo(OrderScreen);
