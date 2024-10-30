import PropTypes from "prop-types";

const SecondaryButton = ({
  onClick,
  children,
  loading = false,
  icon: Icon,
  className = "",
  size = "medium",
  ...props
}) => {
  // Size mapping for different button sizes
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-8 py-4 text-base",
    large: "px-10 py-5 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-full bg-gradient-to-r from-[#6A1B9A] to-[#AB47BC] text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out hover:from-[#AB47BC] hover:to-[#6A1B9A] focus:outline-none focus:ring-2 focus:ring-purple-300 ${sizeClasses[size]} ${className}`}
      disabled={loading} // Disable button if loading is true
      {...props}
    >
      {Icon && <Icon className="mr-2" />}
      {loading ? "Loading..." : children}
    </button>
  );
};

// Define prop types for SecondaryButton
SecondaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  icon: PropTypes.elementType,
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]), // Allowed size values
};

export default SecondaryButton;
