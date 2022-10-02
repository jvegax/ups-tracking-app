import { View, Text, TouchableOpacity } from "react-native";
import React, { memo, FC } from "react";
import { Card, Icon } from "@rneui/themed";
import { useTailwind } from "tailwind-rn/dist";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../Navigator/TabNavigator";
import { RootStackParamList } from "../Navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  order: Order;
};

type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

const OrderCard: FC<Props> = ({ order }) => {
  const tw = useTailwind();
  const navigation = useNavigation<OrdersScreenNavigationProp>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Order", { order })}>
      <Card containerStyle={tw("px-5 rounded-lg")}>
        <View style={tw("flex-row justify-between items-center")}>
          <View>
            <Icon
              name="truck-delivery"
              color={"#EB6A7C"}
              type="material-community"
            />
            <Text style={{ fontSize: 10 }}>
              {new Date(order.createdAt).toDateString()}
            </Text>
          </View>

          <View>
            <Text style={[tw("text-gray-400"), { fontSize: 10 }]}>
              {order.carrier} - {order.trackingId}
            </Text>
            <Text style={tw("text-gray-500 text-xl")}>
              {order.trackingItems.customer.name}
            </Text>
          </View>

          <View style={tw("flex-row items-center")}>
            <Text>{order.trackingItems.items.length} x</Text>
            <Icon style={tw("ml-2")} name="box" type="feather" />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default memo(OrderCard);
