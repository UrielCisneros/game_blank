import { StatusBar } from "expo-status-bar";
import { View, ScrollView } from "react-native";
import { styles } from "./AppStyles";
import Main from "./Components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
          <StatusBar style="auto" />
          <Main />
      </View>
    </SafeAreaProvider>
  );
}
