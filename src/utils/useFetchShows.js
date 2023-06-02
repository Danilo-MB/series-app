import { useState, useEffect } from "react";
import { getShows } from "../services/api/series";


export const useFetchShows = () => {

  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
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
    }
  };

  const loadMore = () => {
    console.log("loadMore", page)
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchShows(page);
  }, []);

  return {
    shows,
    loadMore,
    loading,
    error,
  };

};