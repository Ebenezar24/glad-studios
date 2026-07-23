import React from "react";
import { Scissors, Droplet, Leaf, Sparkles, Heart } from "lucide-react";
import { SectionEyebrow } from "../components/Shared";

const CATEGORIES = [
  {
    step: "01",
    name: "Hair Services",
    icon: <Scissors size={20} />,
    items: ["Hair Cut", "Hair Wash", "Hair Spa", "Hair Coloring", "Hair Smoothening", "Keratin Treatment", "Hair Straightening", "Blow Dry"],
  },
  {
    step: "02",
    name: "Skin Care",
    icon: <Droplet size={20} />,
    items: ["Facial", "Cleanup", "Detan", "Bleach", "Skin Polishing"],
  },
  {
    step: "03",
    name: "Spa",
    icon: <Leaf size={20} />,
    items: ["Body Massage", "Aroma Therapy", "Head Massage", "Foot Spa", "Body Scrub"],
  },
  {
    step: "04",
    name: "Makeup",
    icon: <Sparkles size={20} />,
    items: ["Bridal Makeup", "Party Makeup", "Engagement Makeup", "HD Makeup", "Airbrush Makeup"],
  },
  {
    step: "05",
    name: "Grooming",
    icon: <Heart size={20} />,
    items: ["Manicure", "Pedicure", "Waxing", "Threading", "Shaving", "Beard Styling"],
  },
];

const PACKAGES = [
  { name: "Bridal Package", items: ["Makeup", "Hair Styling", "Facial", "Manicure", "Pedicure"] },
  { name: "Groom Package", items: ["Customised on request — ask our stylists for details"] },
  { name: "Couple Spa Package", items: ["Customised on request — ask our stylists for details"] },
  { name: "Monthly Beauty Package", items: ["Customised on request — ask our stylists for details"] },
];

export default function Services() {
  return (
    <>
      <section className="page-head">
        <SectionEyebrow>Services</SectionEyebrow>
        <h1>Everything, under one roof</h1>
        <p className="lead">
          From a quick trim to a full bridal look — hair, skin, spa, makeup,
          and grooming, for men and women, all in one studio.
        </p>
      </section>

      <div className="rituals">
        {CATEGORIES.map((c) => (
          <section className="ritual" key={c.step}>
            <div className="ritual-head">
              <span className="ritual-step">{c.step}</span>
              <div className="ritual-icon">{c.icon}</div>
              <div>
                <h2>{c.name}</h2>
              </div>
            </div>
            <ul className="service-list">
              {c.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="page-head" style={{ paddingTop: 0 }}>
        <SectionEyebrow>Packages</SectionEyebrow>
        <h2 style={{ fontSize: "2rem" }}>Bundled for the big days</h2>
      </section>

      <div className="packages-grid">
        {PACKAGES.map((p) => (
          <div className="package-card" key={p.name}>
            <h3>{p.name}</h3>
            <ul>
              {p.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
