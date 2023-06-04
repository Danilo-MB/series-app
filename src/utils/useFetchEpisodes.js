import { useEffect, useState } from "react";
import { getEpisodes } from "../services/api/series";


export const useFetchEpisodes = (showId) => {

  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchEpisodes = async () => {
    setLoading(true);
    try {
      const episodes = await getEpisodes(showId);
      setEpisodes((prevEpisodes) => [...prevEpisodes, ...episodes.data]);
    } catch (error) {
      console.log(error, "error")
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=> {
    fetchEpisodes();
  }, []);

  return {
    episodes,
    loading,
    error
  }

};