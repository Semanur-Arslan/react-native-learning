import { useLocalSearchParams } from "expo-router";
import useFetchDetail from "../../../../hooks/useFetchDetail";
import Loading from "../../../../components/loading";
import Error from "../../../../components/error/error";
import DetailCard from "../../../../components/detailCard";

export default function Detail() {
  const { id } = useLocalSearchParams();

  const apiUrl = `${process.env.EXPO_PUBLIC_API_URL}/jobs/${id}`;

  const { loading, data, error, refetch } = useFetchDetail(apiUrl, id);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} onRetry={refetch} />;
  }

  return <DetailCard data={data} />;
}
