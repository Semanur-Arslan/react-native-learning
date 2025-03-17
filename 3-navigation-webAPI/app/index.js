import { SafeAreaView, Text, ImageBackground, View } from "react-native";
import { useRouter } from "expo-router";
import styles from "./indexStyles";
import CustomButton from "../components/customButton";

export default function Home() {
  const router = useRouter();

  function handleClick() {
    router.push("/categories");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/images/backgroundImage.png")}
      >
        <Text style={styles.logo}>
          <Text style={styles.orangeText}>Tarifka</Text>
          <Text style={styles.blackText}>App</Text>
        </Text>
      </ImageBackground>
      <View style={styles.body}>
        <Text style={styles.title}>Ready to serv tasty food?</Text>
        <Text style={styles.description}>
          Tarifka provide you clear explanation tutorial with complete cooking
          best practice only for you.
        </Text>
      </View>
      <CustomButton
        onPress={handleClick}
        title="Start Cooking"
        backgroundColor="primary"
      />
    </SafeAreaView>
  );
}
