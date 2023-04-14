import React from "react";

function Wave1({ fillColor = "rgba(255,255,255,1)" }: { fillColor?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ WebkitTransition: "0.3s", transition: "0.3s" }}
      version="1.1"
      viewBox="0 0 1440 130"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop offset="0%" stopColor={fillColor}></stop>
          <stop offset="100%" stopColor={fillColor}></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient-0)"
        d="M0 91l120-10.8C240 69 480 48 720 34.7 960 22 1200 17 1440 28.2 1680 39 1920 65 2160 71.5s480-6.5 720-15.2C3120 48 3360 43 3600 39s480-9 720-13 480-9 720 2.2C5280 39 5520 65 5760 62.8c240-1.8 480-32.8 720-39 240-6.8 480 11.2 720 17.4 240 6.8 480 1.8 720 13C8160 65 8400 91 8640 95.3c240 4.7 480-13.3 720-32.5C9600 43 9840 22 10080 13s480-4 720 6.5 480 28.5 720 34.7c240 6.8 480 1.8 720 2.1 240-.3 480 4.7 720-4.3s480-30 720-39 480-4 720 13 480 48 720 60.7c240 13.3 480 8.3 720 4.3 240-4 480-9 720-6.5s480 10.5 600 15.2l120 4.3v26H0z"
      ></path>
    </svg>
  );
}

export default Wave1;
