import React from "react";
import { Text, SafeAreaView, TextInput, FlatList } from "react-native";
import styles from "./indexStyles";
import ProductCard from "../../components/ProductCard";
import product_data from "../../data/product.json";

export default function HomeScreen() {
  const renderProduct = ({ item }) => <ProductCard product={item} />;
  const footer = () => (
    <Text style={styles.message}>No more products to display</Text>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput placeholder="Search..." style={styles.search_bar} />
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={(item) => item.id}
        data={product_data}
        renderItem={renderProduct}
        ListFooterComponent={footer}
        contentContainerStyle={styles.list_container}
      />
    </SafeAreaView>
  );
}
