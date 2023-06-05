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
      setSearchedShows(shows.data.map(s => s.show))
    } catch (error) {
      setSearchError(true);
    } finally {
      setLoadingSearch(false);
    }
  };

  useEffect(() => {
    search(query);
  }, [query]);

  return {
    searchedShows,
    setQuery,
    loadingSearch,
    searchError,
  }

}