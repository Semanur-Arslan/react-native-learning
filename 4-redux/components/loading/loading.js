import { SafeAreaView, ActivityIndicator } from "react-native";
import styles from "./loadigStyles";
import { Colors } from "../../constants/Colors";

export default function Loading() {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </SafeAreaView>
  );
}
