import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import Customer from "./src/Screens/Customer";
import utilities from "./tailwind.json";

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Customer />
      </NavigationContainer>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
