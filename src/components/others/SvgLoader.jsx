import React from "react";

import "./SvgLoader.scss";

const SvgLoader = () => {
  return (
    <div className="svg-loader">
      <svg className="svg-loader__circle">
        <circle
          className="svg-loader__path"
          cx="50"
          cy="50"
          r="10"
          fill="none"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );
};

export default SvgLoader;
