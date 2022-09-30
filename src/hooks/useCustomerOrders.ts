import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ORDERS } from "../Graphql/queries";

const useCustomerOrders = (userId: string) => {
  const { data, loading, error } = useQuery(GET_ORDERS);
  const [customerOrders, setCustomerOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!data) return;

    const orders: Order[] = data.getOrders.map( ({value}: OrderResponse) => {
        return {...value};
    });

    const ordersById = orders.filter((order: Order) => { 
        return order.trackingItems.customer_id === userId;
    });

    setCustomerOrders(ordersById);
  }, [data, userId]);
  return { loading, error, customerOrders };
};

export default useCustomerOrders;
