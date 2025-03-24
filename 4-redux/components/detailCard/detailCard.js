import { Text, View, FlatList, ScrollView } from "react-native";
import styles from "./detailCardStyles";
import HTMLView from "react-native-htmlview";
import FavoriteButton from "../favoriteButton";
import CustomButton from "../customButton";
import { useRouter } from "expo-router";
import { useFormatDate } from "../../hooks/useFormatDate";

export default function DetailCard({ data }) {
  const router = useRouter();
  const { formatDate } = useFormatDate();

  function renderItems(item, name) {
    return (
      <View style={styles[name]}>
        <Text style={styles[`${name}Text`]}>{item.name}</Text>
      </View>
    );
  }

  function renderTitle(title) {
    return <Text style={styles.title}>{title}</Text>;
  }

  const safeHtml =
    typeof data?.contents === "string" && data.contents.trim().length > 0
      ? data.contents
      : "<p>Content not found</p>";

  function handleClick() {
    router.push(data.refs.landing_page);
  }
  return (
    <View style={styles.container}>
      <View style={styles.nameWrapper}>
        <Text style={styles.name}>{data?.name}</Text>
        {data && <FavoriteButton job={data} />}
      </View>
      <Text style={styles.company}>{data?.company.name}</Text>
      <View style={styles.wrapper}>
        {renderTitle("Locations:")}
        <FlatList
          data={data?.locations}
          horizontal
          renderItem={({ item, index }) => renderItems(item, "location")}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.wrapper}>
        {renderTitle("Level:")}
        <FlatList
          data={data?.levels}
          horizontal
          renderItem={({ item, index }) => renderItems(item, "level")}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.wrapper}>
        {renderTitle("Publication Date:")}
        <Text style={styles.date}>{formatDate(data?.publication_date)}</Text>
      </View>
      <ScrollView style={styles.contentWrapper}>
        <HTMLView value={safeHtml} />
      </ScrollView>
      <CustomButton
        title="Apply for this job"
        backgroundColor="primary"
        onPress={handleClick}
      />
    </View>
  );
}
