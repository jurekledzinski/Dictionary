import React from "react";

import "./SvgNight.scss";

const SvgNight = () => {
  return (
    <div className="svg">
      <svg
        className="svg__night"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 400"
      >
        <rect fill="#330000" width="800" height="400" />
        <defs>
          <radialGradient
            id="a"
            cx="396"
            cy="281"
            r="514"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#D18" />
            <stop offset="1" stopColor="#330000" />
          </radialGradient>
          <linearGradient
            id="b"
            gradientUnits="userSpaceOnUse"
            x1="400"
            y1="148"
            x2="400"
            y2="333"
          >
            <stop offset="0" stopColor="#FA3" stopOpacity="0" />
            <stop offset="1" stopColor="#FA3" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <rect fill="url(#a)" width="800" height="400" />
        <g fillOpacity="0.4">
          <circle fill="url(#b)" cx="267.5" cy="61" r="300" />
          <circle fill="url(#b)" cx="532.5" cy="61" r="300" />
          <circle fill="url(#b)" cx="400" cy="30" r="300" />
        </g>
      </svg>
    </div>
  );
};

export default SvgNight;
