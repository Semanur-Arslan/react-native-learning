import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import CustomHeader from "../../../components/customHeader";
import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export default function ScreenLayout() {
  return (
    <LinearGradient
      colors={[Colors.gradientPrimary, Colors.gradientSecondary]}
      style={styles.gradient}
    >
      <Stack
        initialRouteName="jobListScreen/jobList"
        screenOptions={{
          header: (props) => <CustomHeader {...props} />,
          contentStyle: { backgroundColor: "transparent" },
          animation: "none",
        }}
      >
        <Stack.Screen
          name="jobListScreen/jobList"
          options={{ title: "Job List" }}
        />
        <Stack.Screen name="detailScreen/[id]" options={{ title: "Detail" }} />
      </Stack>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
