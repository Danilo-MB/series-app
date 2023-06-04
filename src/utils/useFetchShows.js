import { useState, useEffect } from "react";
import { getShows } from "../services/api/series";


export const useFetchShows = () => {

  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(false);

  const fetchShows = async () => {
    setLoading(true);
    try {
      const shows = await getShows(page);
      setShows((prevShows) => [...prevShows, ...shows.data]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
    setLoadingMore(true)
  };

  useEffect(() => {
    fetchShows(page);
  }, [page]);

  return {
    shows,
    loadMore,
    loading,
    setLoadingMore,
    loadingMore,
    error,
  };

};