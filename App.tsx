import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import RootNavigator from "./src/Navigator/RootNavigator";
import Customer from "./src/Screens/CustomerScreen";
import utilities from "./tailwind.json";

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigator />
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
