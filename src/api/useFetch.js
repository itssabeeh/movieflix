import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const shows = await axios.get(url);
      setData(shows);
      setIsLoading(false);
    } catch {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { isLoading, data, isError };
};
