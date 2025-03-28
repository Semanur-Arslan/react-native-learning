import { Stack } from "expo-router";

export default function ScreenLayout() {
  return (
    <Stack>
      <Stack.Screen name="profileScreen/index" options={{ title: "Profile" }} />
    </Stack>
  );
}
