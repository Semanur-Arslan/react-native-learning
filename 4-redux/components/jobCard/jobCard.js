import { View, Text, TouchableWithoutFeedback, FlatList } from "react-native";
import styles from "./jobCardStyles";
import { useRouter } from "expo-router";
import FavoriteButton from "../favoriteButton";
import { useFormatDate } from "../../hooks/useFormatDate";

export default function JobCard({ job }) {
  const router = useRouter();
  const { formatDate } = useFormatDate();

  function handleClick() {
    router.push(`/home/detailScreen/${job.id}`);
  }

  function renderItems(item, name) {
    return (
      <View style={styles[name]}>
        <Text style={styles[`${name}Text`]}>{item.name}</Text>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.name}>{job.name}</Text>
          <FavoriteButton job={job} />
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.company}>{job.company.name}</Text>
          <Text style={styles.date}>{formatDate(job.publication_date)}</Text>
        </View>
        <FlatList
          data={job.locations}
          horizontal
          renderItem={({ item, index }) => renderItems(item, "location")}
          keyExtractor={(item, index) => index.toString()}
        />

        <View style={styles.levelWrapper}>
          <FlatList
            data={job.levels}
            horizontal
            renderItem={({ item, index }) => renderItems(item, "level")}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
