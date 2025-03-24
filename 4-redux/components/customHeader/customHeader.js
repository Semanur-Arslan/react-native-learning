import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import styles from "./customHeaderStyles";

export default function CustomHeader({ options, navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        {navigation.canGoBack() && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
          </TouchableOpacity>
        )}

        <Text style={styles.title}>{options.title}</Text>
      </View>
    </SafeAreaView>
  );
}
