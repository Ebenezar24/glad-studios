import React from "react";

const LINKS = [
  ["home", "Home"],
  ["about", "About Us"],
  ["services", "Services"],
  ["gallery", "Gallery"],
  ["contact", "Contact Us"],
];

export default function NavBar({ page, setPage }) {
  return (
    <header className="nav">
      <button
        className="brand"
        onClick={() => setPage("home")}
        aria-label="Glad Studios Unisex Salon & Spa — go to Home"
      >
        <span className="brand-mark">GS</span>
        <span className="brand-word">
          Glad Studios <em>Unisex</em> Salon &amp; Spa
        </span>
      </button>

      <nav className="nav-links">
        {LINKS.map(([key, label]) => (
          <button
            key={key}
            className={`nav-link${page === key ? " active" : ""}`}
            onClick={() => setPage(key)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
