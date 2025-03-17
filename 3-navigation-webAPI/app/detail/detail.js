import { Image, Text, View, ActivityIndicator, ScrollView } from "react-native";
import styles from "./detailStyles";
import useFetch from "../../hooks/useFetch";
import { Colors } from "../../constants/Colors";
import { useCategoryMeal } from "../../contex/CategoryMealContext";
import CustomButton from "../../components/customButton";
import { useRouter } from "expo-router";

export default function Detail() {
  const { mealId } = useCategoryMeal();
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const { data, error, loading } = useFetch(`${apiUrl}/lookup.php?i=${mealId}`);
  const router = useRouter();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  const detail = data.meals[0];

  function handleClick() {
    router.push(detail.strYoutube);
  }

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.img} source={{ uri: detail.strMealThumb }} />
      <View style={styles.titleBody}>
        <Text style={styles.title}>{detail.strMeal}</Text>
        <Text style={styles.area}>{detail.strArea}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>{detail.strInstructions}</Text>
        <CustomButton
          title="Watch on Youtube"
          onPress={handleClick}
          backgroundColor="red"
        />
      </View>
    </ScrollView>
  );
}
