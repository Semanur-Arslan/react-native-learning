import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { CategoryMealProvider } from "@/contex/CategoryMealContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Caveat-Bold": require("../assets/fonts/Caveat-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const headerOptions = {
    headerTitleStyle: {
      color: Colors.primary,
    },
    headerTintColor: Colors.black,
    headerBackTitleStyle: {
      fontSize: 16,
    },
  };

  return (
    <CategoryMealProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={headerOptions}>
          <Stack.Screen
            name="index"
            options={{ headerShown: false, title: "Home" }}
          />
          <Stack.Screen
            name="categories/index"
            options={{ title: "Categories" }}
          />
          <Stack.Screen name="meals/index" options={{ title: "Meals" }} />
          <Stack.Screen name="detail/index" options={{ title: "Detail" }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </CategoryMealProvider>
  );
}
