import PropTypes from "prop-types";

const Tooltip = ({ text, children, className = "" }) => {
  return (
    <div className="relative group">
      {children}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-4 py-2 z-10 transition-opacity duration-200 ${className}`}
      >
        {text}
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string, 
};

export default Tooltip;
