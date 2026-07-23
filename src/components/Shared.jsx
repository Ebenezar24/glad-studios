import React from "react";

/* Signature element: the "ripple line" — a single continuous wave
   that opens the hero and re-appears as every section divider,
   standing in for the salon's water & wellness thread that runs
   through every service, from a haircut to a full body massage. */
export const RippleDivider = ({ flip = false }) => (
  <svg
    className={`ripple-divider${flip ? " flip" : ""}`}
    viewBox="0 0 1200 60"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M0 30 C 100 5, 200 55, 300 30 S 500 5, 600 30 S 800 55, 900 30 S 1100 5, 1200 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

export const SectionEyebrow = ({ children }) => (
  <div className="eyebrow">
    <span className="eyebrow-mark" />
    {children}
  </div>
);
