import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, logo, additionalLinks }) => {
 

  return (
    <nav className="bg-[#5e5a5a] p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            {logo && <img src={logo} alt="Logo" className="h-8 mr-2" />}{" "}
          </Link>

          <Link to="/">
            <h1 className="text-xl font-bold text-white">{title}</h1>
          </Link>
        </div>

        {/* Links */}
        <ul
          className={`md:flex md:justify-between items-center list-none md:static left-0 w-full bg-[#5e5a5a] md:bg-transparent md:w-auto transition-all duration-300 overflow-x-auto whitespace-nowrap`}
        >
          {additionalLinks?.map((link) => (
            <li
              key={link.label}
              className="text-white text-lg px-4 py-2 md:flex md:items-center inline-block"
            >
              <Link
                to={link.url}
                className="text-inherit no-underline flex items-center"
              >
                {typeof link.label === "string" ? (
                  link.label
                ) : (
                  <>
                    {link.label} {/* Render the icon directly */}
                  </>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string,
  additionalLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.element.isRequired, // Allow React elements for icons
      ]).isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default Navbar;
