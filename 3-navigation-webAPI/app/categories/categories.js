import { FlatList, Text, View, ActivityIndicator } from "react-native";
import styles from "./categoriesStyles";
import useFetch from "../../hooks/useFetch";
import CategoryCard from "../../components/categoryCard";
import Loading from "../../components/loading";

export default function Categories() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const { data, error, loading } = useFetch(`${apiUrl}/categories.php`);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  const categories = data.categories;
  const renderCategoryCard = ({ item }) => <CategoryCard category={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoryCard}
        keyExtractor={(item) => item.idCategory}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
