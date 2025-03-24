import { View, FlatList } from "react-native";
import styles from "./jobListStyles";
import useFetch from "../../../../hooks/useFetch";
import JobCard from "../../../../components/jobCard/jobCard";
import Loading from "../../../../components/loading";
import Error from "../../../../components/error/error";

export default function JobList() {
  const apiUrl = `${process.env.EXPO_PUBLIC_API_URL}/jobs`;
  const { loading, data, error, refetch, loadMore, isFetchingMore } =
    useFetch(apiUrl);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} onRetry={refetch} />;
  }

  const renderJobCard = ({ item }) => <JobCard job={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderJobCard}
        keyExtractor={(item) => item.id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={isFetchingMore ? <Loading /> : null}
        ListFooterComponentStyle={{ paddingVertical: 24 }}
      />
    </View>
  );
}
