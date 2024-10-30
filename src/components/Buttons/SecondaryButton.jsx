
import PropTypes from "prop-types";

const SecondaryButton = ({
  onClick,
  children,
  loading = false,
  icon: Icon,
  className = "",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-[#FF6F61] to-[#FF8A65] text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out hover:from-[#FF8A65] hover:to-[#FF6F61] focus:outline-none focus:ring-2 focus:ring-red-300 ${className}`}
      disabled={loading} // Disable button if loading is true
      {...props}
    >
      {Icon && <Icon className="mr-2" />}
      {loading ? "Loading..." : children}
    </button>
  );
};

// Define prop types
SecondaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  icon: PropTypes.elementType,
  className: PropTypes.string,
};

export default SecondaryButton;
