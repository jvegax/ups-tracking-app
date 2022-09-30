import { useQuery } from "@apollo/client";
import { GET_CUSTOMERS } from "../Graphql/queries";

const useCustomers = () => {
  const { data , loading, error } = useQuery(GET_CUSTOMERS);

    
  return { loading, error } 
}

export default useCustomers