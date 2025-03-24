import { View, FlatList, Text } from "react-native";
import styles from "./favoritesStyles";
import JobCard from "../../../../components/jobCard/jobCard";

import { useSelector } from "react-redux";

export default function Favorites() {
  const favoriteJobs = useSelector((state) => state.favoriteJobs.favorites);

  const renderJobCard = ({ item }) => (
    <JobCard job={item} onPress={() => handleClick(item.id)} />
  );

  return (
    <View style={styles.container}>
      {favoriteJobs.length > 0 ? (
        <FlatList
          data={favoriteJobs}
          renderItem={renderJobCard}
          keyExtractor={(item) => item.id}
          ListFooterComponentStyle={{ paddingVertical: 24 }}
        />
      ) : (
        <Text style={styles.message}>
          You have not added any jobs to your favorites yet.
        </Text>
      )}
    </View>
  );
}
