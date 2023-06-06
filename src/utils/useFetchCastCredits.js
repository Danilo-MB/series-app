import { useEffect, useState } from "react";
import { getCastCredits } from "../services/api/people";


export const useFetchCastCredits = () => {

  const [castCredits, setCastCredits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCastCredits = async () => {
    setLoading(true);
    try {
      const castCredits = await getCastCredits(page);
      setCastCredits((prevCastCredits) => [...prevCastCredits, ...castCredits.data]);
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