import { ActivityIndicator, View, Text } from "react-native";
import styles from "./loadingStyles";
import { Colors } from "../../constants/Colors";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
      <Text>Loading...</Text>
    </View>
  );
}
