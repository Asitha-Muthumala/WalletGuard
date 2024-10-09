import { Text, View } from "react-native";
import Started from "./screen/started/started";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Started />
    </View>
  );
}
