import React from "react";

import "./SvgDay.scss";

const SvgDay = () => {
  return (
    <div className="svg-day">
      <svg
        className="svg-day__svg"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
      >
        <rect fill="#0074d9" width="800" height="400" />
        <defs>
          <radialGradient
            id="a"
            cx="396"
            cy="281"
            r="514"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#2593dd" />
            <stop offset="1" stopColor="#0074d9" />
          </radialGradient>
          <linearGradient
            id="b"
            gradientUnits="userSpaceOnUse"
            x1="400"
            y1="148"
            x2="400"
            y2="333"
          >
            <stop offset="0" stopColor="#51fff0" stopOpacity="0" />
            <stop offset="1" stopColor="#51fff0" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <rect fill="url(#a)" width="800" height="400" />
        <g fillOpacity="0.22">
          <circle fill="url(#b)" cx="267.5" cy="61" r="300" />
          <circle fill="url(#b)" cx="532.5" cy="61" r="300" />
          <circle fill="url(#b)" cx="400" cy="30" r="300" />
        </g>
      </svg>
    </div>
  );
};

export default SvgDay;
