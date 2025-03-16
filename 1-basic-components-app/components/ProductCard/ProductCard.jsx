import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./ProductCardStyles";
import CustomButton from "../CustomButton";

const ProductCard = ({ product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.img_container}>
        <Image style={styles.img} source={{ uri: product.imgURL }} />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        {product.inStock ? (
          <CustomButton
            text="Add to Card"
            onPress={() => alert("Added card!")}
          />
        ) : (
          <Text style={styles.in_stock}>Out of Stock</Text>
        )}
      </View>
    </View>
  );
};

export default ProductCard;
