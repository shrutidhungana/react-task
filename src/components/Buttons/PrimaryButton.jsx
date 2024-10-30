import PropTypes from "prop-types";

const PrimaryButton = ({
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
      className={`flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-[#8BC34A] to-[#AEEA00] text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out hover:from-[#AEEA00] hover:to-[#8BC34A] focus:outline-none focus:ring-2 focus:ring-green-300 ${className}`}
      disabled={loading} // Disable button if loading is true
      {...props}
    >
      {Icon && <Icon className="mr-2" />}
      {loading ? "Loading..." : children}
    </button>
  );
};

PrimaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  icon: PropTypes.elementType,
  className: PropTypes.string,
};

export default PrimaryButton;
