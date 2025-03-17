import { FlatList, Text, View, ActivityIndicator } from "react-native";
import styles from "./mealsStyles";
import useFetch from "../../hooks/useFetch";
import { Colors } from "../../constants/Colors";
import { useCategoryMeal } from "../../contex/CategoryMealContext";
import MealCard from "../../components/mealCard/mealcard";

export default function Meals() {
  const { category } = useCategoryMeal();
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const { data, error, loading } = useFetch(
    `${apiUrl}/filter.php?c=${category}`
  );

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

  const meals = data.meals;
  const renderMealCard = ({ item }) => <MealCard meal={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={renderMealCard}
        keyExtractor={(item) => item.idMeal}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
