import { Stack } from "expo-router";

export default function ScreenLayout() {
  return (
    <Stack initialRouteName="chatroomsScreen/index">
      <Stack.Screen
        name="chatroomsScreen/index"
        options={{ title: "Chstrooms List" }}
      />
      <Stack.Screen name="roomScreen/[id]" options={{ title: "Room" }} />
    </Stack>
  );
}
