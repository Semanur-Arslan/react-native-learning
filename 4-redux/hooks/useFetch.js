import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [error, setError] = useState();

  const fetchData = async (pageNum = 1, append = false) => {
    try {
      if (pageNum === 1) setLoading(true);
      else setIsFetchingMore(true);

      const response = await axios.get(`${url}?page=${pageNum}`);
      const newData = response.data.results;

      setData((prevData) => (append ? [...prevData, ...newData] : newData));
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
      setIsFetchingMore(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const loadMore = () => {
    if (isFetchingMore || loading) return;
    setPage((prevPage) => prevPage + 1);
    fetchData(page + 1, true);
  };

  return { loading, data, error, refetch: fetchData, loadMore, isFetchingMore };
}
