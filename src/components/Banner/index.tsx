import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Banner = ({ imageUrl, slogan, message, buttonLabel, buttonLink, extraMessage }) => {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden bg-gray-100">
      <img
        src={imageUrl}
        alt="Banner Background"
        className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ease-in-out opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-5xl font-bold mb-4"
        >
          {slogan}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="text-lg sm:text-xl max-w-2xl"
        >
          {message}
        </motion.p>

        {buttonLabel && (
          <Link to={buttonLink} className="mt-6">
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              className="px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              {buttonLabel}
            </motion.button>
          </Link>
        )}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="text-lg sm:text-xl max-w-2xl text-red-500"
          >
            {extraMessage}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  message: PropTypes.string,
  buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
  extraMessage: PropTypes.string,
};



export default Banner;
