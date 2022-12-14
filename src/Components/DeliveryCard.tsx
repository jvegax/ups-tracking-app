import React, { FC, memo } from "react";
import { useTailwind } from "tailwind-rn/dist";
import { Card, Icon } from "@rneui/themed";
import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Divider } from "@rneui/base";

type Props = {
  order: Order;
  fullWith?: boolean;
};

const DeliveryCard: FC<Props> = ({ order, fullWith }) => {
  const tw = useTailwind();

  return (
    <Card
      containerStyle={[
        tw(`${fullWith ? "rounded-none m-0" : "rounded-lg"}`),
        {
          backgroundColor: fullWith ? "#EB6A7C" : "#59C1CC",
          padding: 0,
          paddingTop: 16,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
      ]}
    >
      <View style={fullWith && { height: "100%" }}>
        <Icon name="box" type="entypo" size={50} color="white" />

        <View style={tw("items-start p-5 -mt-3")}>
          <View style={tw("mx-auto")}>
            <Text
              style={tw("text-xs text-center uppercase text-white font-bold")}
            >
              {order.carrier} code: {order.trackingId}
            </Text>
            <Text style={tw("text-white text-center text-lg font-bold")}>
              Expected delivery: {order.createdAt.toString()}
            </Text>
            <Card.Divider style={tw("mt-4")} color="white" />
          </View>

          <View style={tw("mx-auto mb-4")}>
            <Text style={tw("text-base text-center text-white font-bold")}>
              Address
            </Text>
            <Text style={tw("text-sm text-center text-white")}>
              {order.Address}
            </Text>
            <Text style={tw("text-sm text-center italic text-white")}>
              Shipping cost: ${order.shippingCost}
            </Text>
          </View>
        </View>

        <Divider color="white" />

        <View style={tw("p-5")}>
          {order.trackingItems.items.map((item) => (
            <View key={item.item_id} style={tw("flex-row justify-between")}>
              <Text style={tw("text-sm italic text-white")}>{item.name}</Text>
              <Text style={tw("text-sm italic text-white")}>
                x {item.quantity}
              </Text>
            </View>
          ))}
        </View>
        {/* @ts-ignore */}
        <MapView
          initialRegion={{
            latitude: order.Lat,
            longitude: order.Lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          style={[tw("w-full"), { flexGrow: 1 }, !fullWith && { height: 200 }]}
        >
          {order.Lat && order.Lng && (
            // @ts-ignore
            <Marker
              coordinate={{
                latitude: order.Lat,
                longitude: order.Lng,
              }}
              title="Delivery Location"
              description={order.Address}
              identifier="destination"
            />
          )}
        </MapView>
      </View>
    </Card>
  );
};

export default memo(DeliveryCard);
