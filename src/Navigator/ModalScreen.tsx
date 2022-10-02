import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon } from "@rneui/themed";
import { memo } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import { RootStackParamList } from "./RootNavigator";
import { TabStackParamList } from "./TabNavigator";
import DeliveryCard from "../Components/DeliveryCard";
import useCustomerOrders from "../hooks/useCustomerOrders";

type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "MyModal">
>;

type ModalScreenRouteProp = RouteProp<RootStackParamList, "MyModal">;

const ModalScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<ModalScreenNavigationProp>();

  const {
    params: { userId, name },
  } = useRoute<ModalScreenRouteProp>();
  const { loading, error, customerOrders } = useCustomerOrders(userId);

  return (
    <View>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={tw("absolute right-5 top-5 z-10")}
      >
        <Icon name="closecircleo" type="antdesign" />
      </TouchableOpacity>

      <View style={tw("mt-10")}>
        <View style={tw("py-5 border-b border-[#59C1CC]")}>
          <Text style={tw("text-center text-xl font-bold text-[#59C1CC]")}>
            {name}
          </Text>
          <Text style={tw("text-center italic text-sm")}>deliveries</Text>
        </View>
      </View>
      <FlatList
        data={customerOrders}
        keyExtractor={(order) => order.trackingId}
        renderItem={({ item: order }) => <DeliveryCard order={order} />}
      />
    </View>
  );
};

export default memo(ModalScreen);
