import { View, Image, Text } from "react-native";
import styles from "./errorStyles";
import CustomButton from "../customButton/customButton";

const errorImages = {
  400: require("../../assets/images/errors/400.png"),
  404: require("../../assets/images/errors/404.png"),
  default: require("../../assets/images/errors/default-error.png"),
};

export default function Error({ error, onRetry }) {
  const imageSource = errorImages[error.code] || errorImages.default;
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.wrapper}>
        <Text style={styles.errorCode}>{error.code}</Text>
        <Text style={styles.errorMessage}>{error.error}</Text>
        <CustomButton
          title="Try Again"
          backgroundColor="primary"
          onPress={onRetry}
        />
      </View>
    </View>
  );
}
