import { ScrollView, ActivityIndicator } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import React, { useLayoutEffect, useState } from "react";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../Navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigator/RootNavigator";
import { Image, Input } from "@rneui/themed";
import { GET_CUSTOMERS } from "../Graphql/queries";
import { useQuery } from "@apollo/client";
import CustomerCard from "../Components/CustomerCard";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomerScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [ input, setInput ] = useState<string>("");
  const { loading, error, data } = useQuery(GET_CUSTOMERS)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <ScrollView style={{ backgroundColor: "#59C1CC" }}>
      <Image
        source={{ uri : 'https://links.papareact.com/3jc'}}
        containerStyle={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />

      <Input
        placeholder="Search by customer"
        value={input}
        onChangeText={setInput}
        containerStyle={tw("bg-white pt-5 pb-0 px-10")}
      />

      {
        data?.getCustomers.map(({ name: ID, value: { email, name }}: CustomerResponse ) => {
          <CustomerCard key={ID} name={name} email={email} userId={ID} />
        })
      }

    </ScrollView>
  );
};

export default CustomerScreen;
