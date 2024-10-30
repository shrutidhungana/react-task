import { useState } from "react";
import baseApi from "./baseApi";

const useDelete = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await baseApi.delete(endpoint, options);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, deleteData };
};

export default useDelete;
