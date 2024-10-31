import { useState, useEffect } from "react";
import baseApi from "../utils/api";

const useGet = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    console.log(`Fetching data from: ${endpoint}`);

    baseApi
      .get(endpoint, options)
      .then((response) => {
        if (isMounted) {
          console.log("Response received:", response.data);
          setData(response.data);
          setError(null);
        }
      })
      .catch((error) => {
        if (isMounted) {
          console.error("Error fetching data:", error);
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
  }, [endpoint]); 

  return { data, loading, error };
};

export default useGet;
