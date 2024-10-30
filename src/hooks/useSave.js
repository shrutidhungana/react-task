import { useState } from "react";
import baseApi from "./baseApi";

const useSave = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveData = async (payload) => {
    setLoading(true);
    setError(null);

    try {
      const response = await baseApi.post(endpoint, payload, options);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, saveData };
};

export default useSave;
