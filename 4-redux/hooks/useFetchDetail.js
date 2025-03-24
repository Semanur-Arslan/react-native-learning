import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchDetail(url, id) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      const data = response.data;
      setData(data);
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return { loading, data, error, refetch: fetchData };
}
