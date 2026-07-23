import React from "react";
import {
  Scissors,
  Palette,
  Droplet,
  Sparkles,
  Hand,
  Wand2,
  Feather,
  HeartHandshake,
  ChevronRight,
  BadgeCheck,
  Award,
  ShieldCheck,
  Wallet,
  Smile,
  Zap,
} from "lucide-react";
import { RippleDivider, SectionEyebrow } from "../components/Shared";

const SERVICES = [
  { icon: <Scissors size={20} />, label: "Haircuts & Hair Styling" },
  { icon: <Palette size={20} />, label: "Hair Coloring & Highlights" },
  { icon: <Zap size={20} />, label: "Keratin & Smoothening Treatments" },
  { icon: <Droplet size={20} />, label: "Facials & Skin Care" },
  { icon: <Hand size={20} />, label: "Manicure & Pedicure" },
  { icon: <Wand2 size={20} />, label: "Bridal & Party Makeup" },
  { icon: <Feather size={20} />, label: "Waxing & Threading" },
  { icon: <HeartHandshake size={20} />, label: "Body Spa & Relaxing Massage" },
];

const WHY_US = [
  { icon: <Award size={18} />, label: "Experienced & Certified Beauty Professionals" },
  { icon: <BadgeCheck size={18} />, label: "Premium Quality Products" },
  { icon: <ShieldCheck size={18} />, label: "Hygienic & Comfortable Salon Environment" },
  { icon: <Sparkles size={18} />, label: "Personalized Beauty & Wellness Solutions" },
  { icon: <Wallet size={18} />, label: "Affordable Pricing" },
  { icon: <Smile size={18} />, label: "Friendly Customer Service" },
  { icon: <Zap size={18} />, label: "Modern Equipment & Latest Beauty Techniques" },
];

const GALLERY_PREVIEW = [
  {
    src: `${process.env.PUBLIC_URL}/images/salon-interior.jpg`,
    label: "Our Studio",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/hair-care-service.jpg`,
    label: "Hair Care",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/bridal-makeup.jpg`,
    label: "Bridal Makeup",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/facial-service.avif`,
    label: "Spa & Relaxation",
  },
];

export default function Home({ setPage }) {
  return (
    <>
      <section className="hero hero-split">
        <div className="hero-copy">
          <SectionEyebrow>Beauty, Style &amp; Relaxation</SectionEyebrow>
          <h1 className="hero-title">
            All under <em>one roof.</em>
          </h1>
          <p className="hero-sub">
            Experience the perfect blend of beauty, grooming, and wellness at
            Glad Studios Unisex Salon &amp; Spa. We offer premium salon and
            spa services for both men and women, helping you look your best
            and feel refreshed. From stylish haircuts and vibrant hair
            coloring to rejuvenating facials, relaxing massages, and
            luxurious spa treatments, our experienced professionals are
            dedicated to providing personalized care in a clean,
            comfortable, and welcoming environment.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => setPage("contact")}>
              Book your appointment <ChevronRight size={16} />
            </button>
            <button className="btn btn-ghost" onClick={() => setPage("services")}>
              See services
            </button>
          </div>
        </div>
        <div className="hero-media">
          <img
  src={`${process.env.PUBLIC_URL}/images/hero-spa-relax.jpg`}
  alt="Guest relaxing during a spa facial treatment at Glad Studios"/>
        </div>
      </section>

      <RippleDivider />

      <section className="page-head" style={{ paddingBottom: 0 }}>
        <SectionEyebrow>Our Services</SectionEyebrow>
        <h2 style={{ fontSize: "1.9rem" }}>Everything you need, in one visit</h2>
      </section>

      <section className="service-chip-grid">
        {SERVICES.map((s) => (
          <div className="service-chip" key={s.label}>
            <span className="service-chip-icon">{s.icon}</span>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      <section className="photo-strip">
        {GALLERY_PREVIEW.map((g) => (
          <figure className="photo-tile" key={g.label}>
            <img src={g.src} alt={g.label} />
            <figcaption>{g.label}</figcaption>
          </figure>
        ))}
      </section>

      <section className="page-head" style={{ paddingBottom: 0 }}>
        <SectionEyebrow>Why Choose Us?</SectionEyebrow>
        <h2 style={{ fontSize: "1.9rem" }}>What sets Glad Studios apart</h2>
      </section>

      <section className="why-chip-grid">
        {WHY_US.map((w) => (
          <div className="why-chip" key={w.label}>
            <span className="why-chip-icon">{w.icon}</span>
            <span>{w.label}</span>
          </div>
        ))}
      </section>

      <section className="quote-band">
        <p>
          At Glad Studios Unisex Salon &amp; Spa, we believe everyone
          deserves to look and feel their best. Whether you're visiting for
          a quick grooming session, a complete makeover, or a relaxing spa
          treatment, we are committed to delivering exceptional service and
          ensuring every visit leaves you feeling confident, refreshed, and
          beautiful.
        </p>
        <span>— Our Promise</span>
      </section>

      <section className="final-cta">
        <h2>Book Your Appointment Today!</h2>
        <p>
          Treat yourself to the care you deserve. Visit Glad Studios Unisex
          Salon &amp; Spa and let our experts help you achieve your perfect
          look while enjoying a relaxing and rejuvenating experience.
        </p>
        <button className="btn btn-primary" onClick={() => setPage("contact")}>
          Book your appointment <ChevronRight size={16} />
        </button>
      </section>
    </>
  );
}
