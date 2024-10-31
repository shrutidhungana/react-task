import { toast } from "react-toastify";

// Custom hook for toast notifications
const useToast = () => {
  const success = (message) => {
    toast.success(message, {
      className: "bg-green-500 text-white p-4 rounded-md shadow-md",
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  const error = (message) => {
    toast.error(message, {
      className: "bg-red-500 text-white p-4 rounded-md shadow-md",
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  return { success, error };
};

export default useToast;
