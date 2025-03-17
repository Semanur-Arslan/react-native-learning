import {
  Image,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import styles from "./mealCardStyles";
import { useRouter } from "expo-router";
import { useCategoryMeal } from "../../contex/CategoryMealContext";

export default function MealCard({ meal }) {
  const router = useRouter();
  const { updateMealId } = useCategoryMeal();

  function handleClick() {
    updateMealId(meal?.idMeal);
    router.push("/detail");
  }
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <ImageBackground
        style={styles.background}
        source={{ uri: meal.strMealThumb }}
      >
        <View style={styles.body}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {meal.strMeal}
          </Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
