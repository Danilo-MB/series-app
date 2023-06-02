import { useState, useEffect } from "react";
import { searchShows } from "../services/api/series";


export const useSearchShows = () => {

  const [query, setQuery] = useState("");
  const [searchedShows, setSearchedShows] = useState([]);
  const [searchError, setSearchError] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const search = async () => {
    setLoadingSearch(true);
    try {
      const shows = await searchShows(query);
      setSearchedShows((prevShows) => [...prevShows, ...shows.data]);
    } catch (error) {
      setSearchError(true);
    } finally {
      setLoadingSearch(false);
    }
    const shows = await searchShows(query);
    setSearchedShows(prevShows => [...prevShows, ...shows.data]);
  };

  useEffect(() => {
    search(query);
  }, [query]);

  useEffect(() => {
    if (!query.length) setSearchedShows([]);
  }, [query]);

  return {
    searchedShows,
    setQuery,
    loadingSearch,
    searchError,
  }

}