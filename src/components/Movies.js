import React from "react";
import PropTypes from "prop-types";

const Movies = ({ src, alt, title, year }) => {
  return (
    <div className="w-1/2 md:w-1/4 my-3 cursor-pointer hover:opacity-50">
      <img src={src} alt={alt} className="w-48 h-64 rounded mx-auto" />
      <p className="text-center my-2">
        {title} {year}
      </p>
      <div className="bg-blue-400 mx-4 px-3 py-1 text-white rounded text-center  hover:bg-blue-200">
        Beli
      </div>
    </div>
  );
};

Movies.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  yaer: PropTypes.string
};

export default Movies;
