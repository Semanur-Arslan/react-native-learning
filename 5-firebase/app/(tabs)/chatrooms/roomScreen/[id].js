import { Text, SafeAreaView } from "react-native";
import styles from "./roomStyles";

export default function Room() {
  return (
    <SafeAreaView>
      <Text style={styles.container}>Room</Text>
    </SafeAreaView>
  );
}
