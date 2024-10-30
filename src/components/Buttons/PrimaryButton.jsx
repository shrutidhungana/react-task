import PropTypes from "prop-types";

const PrimaryButton = ({
  onClick,
  children,
  loading = false,
  icon: Icon,
  className = "",
  size = "medium", // Default size
  ...props
}) => {
  // Size mapping to Tailwind classes, optimized for e-commerce use
  const sizeClasses = {
    small: "px-4 py-2 text-sm", 
    medium: "px-6 py-3 text-base", 
    large: "px-8 py-4 text-lg", 
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-full bg-[#ffa430] text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-[#ff8c00] focus:outline-none focus:ring-2 focus:ring-orange-300 ${sizeClasses[size]} ${className}`}
      disabled={loading} 
      {...props}
    >
      {Icon && <Icon className="mr-2" />}
      {loading ? "Loading..." : children}
    </button>
  );
};

// Define prop types
PrimaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  icon: PropTypes.elementType,
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]), 
};

export default PrimaryButton;
