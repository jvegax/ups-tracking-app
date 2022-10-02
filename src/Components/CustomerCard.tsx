import { View, Text, TouchableOpacity } from "react-native";
import React, { FC, memo } from "react";
import useCustomerOrders from "../hooks/useCustomerOrders";
import { useTailwind } from "tailwind-rn/dist";
import { useNavigation } from "@react-navigation/native";
import { CustomerScreenNavigationProp } from "../Screens/CustomerScreen";
import { Card, Icon } from "@rneui/themed";

type Props = {
  name: string;
  email: string;
  userId: string;
};

const CustomerCard: FC<Props> = ({ email, name, userId }) => {
  const { customerOrders } = useCustomerOrders(userId);
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("MyModal", { userId, name })}
    >
      <Card containerStyle={tw("p-5 rounded-lg")}>
        <View>
          <View style={tw("flex-row justify-between")}>
            <View>
              <Text style={tw("text-2xl font-bold")}>{name}</Text>
              <Text style={tw("text-sm text-gray-500")}>User ID: {userId}</Text>
            </View>

            <View style={tw("flex-row items-center justify-end")}>
              <Text style={{ color: "#59C1CC" }}>
                {customerOrders?.length} x
              </Text>
              <Icon
                style={tw("ml-2")}
                name="box"
                type="entypo"
                color="#59C1CC"
                size={25}
              />
            </View>
          </View>
        </View>
        <Card.Divider />
        <Text style={tw("text-sm text-gray-500")}>{email}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default memo(CustomerCard);
