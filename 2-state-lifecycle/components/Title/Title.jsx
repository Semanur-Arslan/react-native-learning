import { Text, View } from "react-native";
import sytles from "./TitleStyles";

export default function Title(props) {
  return (
    <View style={sytles.container}>
      <Text style={sytles.title}>{props.text}</Text>
      <Text style={sytles.total}>{props.total}</Text>
    </View>
  );
}
