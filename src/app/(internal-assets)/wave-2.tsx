import React from "react";

const Wave2 = ({
  fillColor = "rgba(255,255,255,1)",
}: {
  fillColor?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ WebkitTransition: "0.3s", transition: "0.3s" }}
      version="1.1"
      viewBox="0 0 1440 100"
    >
      {/* <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop offset="0%" stopColor={fillColor}></stop>
          <stop offset="100%" stopColor={fillColor}></stop>
        </linearGradient>
      </defs> */}
      <path
        // fill="url(#sw-gradient-0)"
        fill={fillColor}
        d="M0 50l10-1.7c10-1.3 30-5.3 50-10 20-5.3 40-11.3 60-6.6C140 37 160 53 180 65c20 12 40 18 60 16.7 20-1.7 40-11.7 60-20 20-8.7 40-14.7 60-13.4 20 1.7 40 11.7 60 5 20-6.3 40-30.3 60-26.6 20 3.3 40 33.3 60 41.6 20 8.7 40-5.3 60-20C620 33 640 17 660 16.7c20 .3 40 16.3 60 31.6C740 63 760 77 780 75s40-18 60-23.3c20-4.7 40 1.3 60 10 20 8.3 40 18.3 60 21.6 20 3.7 40-.3 60-6.6 20-6.7 40-16.7 60-23.4 20-6.3 40-10.3 60-5 20 4.7 40 18.7 60 18.4 20 .3 40-13.7 60-16.7s40 3 60 3.3c20-.3 40-6.3 60-16.6 20-9.7 40-23.7 50-30l10-6.7v100H0z"
      ></path>
    </svg>
  );
};

export default Wave2;
