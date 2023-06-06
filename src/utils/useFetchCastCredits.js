import { useEffect, useState } from "react";
import { getCastCredits } from "../services/api/people";


export const useFetchCastCredits = (personId) => {

  const [castCredits, setCastCredits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCastCredits = async () => {
    setLoading(true);
    try {
      const castCredits = await getCastCredits(personId);
      setCastCredits(castCredits.data.map(cc => cc._embedded.show));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCastCredits();
  }, []);

  return {
    castCredits,
    loading,
    error,
  };

};