import  { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { LuLoader2 } from "react-icons/lu";

const Loader = ({ loading, message }) => {
  const [isLoading, setIsLoading] = useState(loading);

  // Simulating data loading
  useEffect(() => {
    const fetchData = async () => {
      if (loading) {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [loading]);

  return (
    <div
      className={`flex items-center justify-center h-screen ${
        isLoading ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col items-center">
        <LuLoader2 className="animate-spin text-blue-500 mb-2 text-4xl" />
        <p className="text-lg text-gray-700">{message || "Loading..."}</p>
      </div>
    </div>
  );
};

// PropTypes for validation
Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string,
};

export default Loader;
