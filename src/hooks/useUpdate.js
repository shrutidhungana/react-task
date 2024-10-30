import { useState } from "react";
import baseApi from "./baseApi";

const useUpdate = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateData = async (payload) => {
    setLoading(true);
    setError(null);

    try {
      const response = await baseApi.put(endpoint, payload, options);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, updateData };
};

export default useUpdate;
