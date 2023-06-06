import { useState, useEffect } from "react";
import { searchPeople } from "../services/api/people";


export const useSearchPeople = () => {

  const [query, setQuery] = useState("");
  const [searchedPeople, setSerchedPeople] = useState([]);
  const [searchError, setSearchError] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const search = async () => {
    setLoadingSearch(true);
    try {
      const people = await searchPeople(query);
      setSerchedPeople(people.data.map(p => p.person))
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
    searchedPeople,
    setQuery,
    loadingSearch,
    searchError,
  }

}