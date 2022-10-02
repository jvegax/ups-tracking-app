import { Text, ScrollView, ActivityIndicator, View } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import React, { memo, useLayoutEffect, useState } from "react";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { TabStackParamList } from "../Navigator/TabNavigator";
import { RootStackParamList } from "../Navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import useOrders from "../hooks/useOrders";
import { Button, Image } from "@rneui/themed";
import OrderCard from "../Components/OrderCard";

type OrderScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;


const OrderScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<OrderScreenNavigationProp>();
  const { loading, error, orders } = useOrders();
  const [ascending, setAscending] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarLabel: ({ focused, color }) => (
        <Text style={{ color: focused ? "#EB6A7C" : color, fontSize: 10 }}>
          Orders
        </Text>
      ),
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#EB6A7C" }}>
      <Image
        source={{ uri: "https://links.papareact.com/m51" }}
        containerStyle={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />

      <View style={tw("mb-4")}>
        {/* @ts-ignore */}
        <Button
          color="white"
          titleStyle={{ color: "#EB6A7C", fontWeight: "400" }}
          style={tw("py-5 px-5")}
          onPress={() => setAscending(!ascending)}
        >
          {ascending ? "Showing oldest first" : "Showing most recent first"}
        </Button>
        {orders
          ?.sort((a, b) => {
            if (ascending) {
              return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
            } else {
              return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
            }
          })
          .map((order) => (
            <OrderCard key={order.trackingId} order={order} />
          ))}
      </View>
    </ScrollView>
  );
};

export default memo(OrderScreen);
