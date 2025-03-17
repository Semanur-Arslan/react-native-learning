import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./categoryCardStyles";
import { useRouter } from "expo-router";
import { useCategoryMeal } from "../../contex/CategoryMealContext";

export default function CategoryCard({ category }) {
  const router = useRouter();
  const { updateCategory } = useCategoryMeal();

  function handleClick() {
    updateCategory(category?.strCategory);
    router.push("/meals");
  }
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: category.strCategoryThumb }} />
        <Text style={styles.title}>{category.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
