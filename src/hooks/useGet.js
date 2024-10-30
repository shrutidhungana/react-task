import { useState, useEffect } from "react";
import baseApi from "./baseApi";

const useGet = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    baseApi
      .get(endpoint, options)
      .then((response) => {
        if (isMounted) {
          setData(response.data);
          setError(null);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [endpoint, options]);

  return { data, loading, error };
};

export default useGet;
