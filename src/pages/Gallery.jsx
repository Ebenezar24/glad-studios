import React from "react";
import { SectionEyebrow } from "../components/Shared";

const TILES = [
  { label: "Hair styling floor", pattern: "ripples" },
  { label: "Spa & massage room", pattern: "mist" },
  { label: "Makeup studio", pattern: "rings" },
  { label: "Manicure & pedicure bar", pattern: "linen" },
  { label: "Facial room", pattern: "grain" },
  { label: "Waxing & threading", pattern: "linen" },
  { label: "Reception", pattern: "rings" },
  { label: "Hair wash area", pattern: "grain" },
];

export default function Gallery() {
  return (
    <>
      <section className="page-head">
        <SectionEyebrow>Gallery</SectionEyebrow>
        <h1>A look inside the studio</h1>
        <p className="lead">A few corners of Glad Studios, exactly as they are on any given day.</p>
      </section>

      <section className="gallery-grid">
        {TILES.map((t, i) => (
          <figure className={`tile tile-${t.pattern}`} key={i}>
            <figcaption>{t.label}</figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}
