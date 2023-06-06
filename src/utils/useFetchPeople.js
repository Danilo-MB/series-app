import { useEffect, useState } from "react";
import { getPeople } from "../services/api/people";


export const useFetchPeople = () => {

  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(false);

  const fetchPeople = async () => {
    setLoading(true);
    try {
      const people = await getPeople(page);
      setPeople((prevPeople) => [...prevPeople, ...people.data]);
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
    fetchPeople(page);
  }, [page]);

  return {
    people,
    loadMore,
    loading,
    setLoadingMore,
    loadingMore,
    error,
  };

};