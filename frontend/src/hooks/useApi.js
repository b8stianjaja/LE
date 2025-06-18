import { useState, useEffect, useCallback } from 'react';

export const useApi = (apiFunc, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunc(params);
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [apiFunc, params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};