import React from "react";
import { Sparkles } from "lucide-react";
import { RippleDivider, SectionEyebrow } from "../components/Shared";

const WHY_CHOOSE_US = [
  "Experienced and professionally trained stylists and beauty experts.",
  "Premium-quality products for safe and effective treatments.",
  "Complete beauty, hair, skin, and wellness services under one roof.",
  "Clean, hygienic, and relaxing salon environment.",
  "Personalized consultations and customized beauty solutions.",
  "Affordable pricing with exceptional service quality.",
  "Modern equipment and the latest beauty techniques.",
  "Friendly, professional staff dedicated to customer satisfaction.",
  "Comfortable ambiance designed to help you relax and rejuvenate.",
  "Commitment to making every visit a delightful and memorable experience.",
];

export default function About() {
  return (
    <>
      <section className="page-head">
        <SectionEyebrow>About Us</SectionEyebrow>
        <h1>Welcome to Glad Studios Unisex Salon &amp; Spa</h1>
        <p className="lead">
          Glad Studios Unisex Salon &amp; Spa is your one-stop destination for
          premium beauty, hair, skin, and wellness services. We are dedicated
          to providing exceptional salon and spa experiences for both men and
          women in a comfortable, hygienic, and relaxing environment.
        </p>
      </section>

      <section className="about-body">
        <p>
          Our comprehensive range of services includes professional
          haircuts, hair styling, hair coloring, keratin and smoothening
          treatments, facials, clean-ups, manicures, pedicures, makeup,
          waxing, threading, body spa therapies, and relaxing massage
          services. Every treatment is tailored to meet your individual
          style and beauty needs.
        </p>
        <p>
          At Glad Studios, our experienced stylists and beauty experts use
          high-quality products and the latest techniques to deliver
          outstanding results. Whether you're preparing for a special
          occasion, maintaining your regular grooming routine, or simply
          looking to unwind with a rejuvenating spa treatment, we are
          committed to helping you look and feel your absolute best.
        </p>
        <p>
          Customer satisfaction is at the heart of everything we do. We
          believe that every visit should leave you feeling confident,
          refreshed, and beautiful. With personalized care, professional
          expertise, and a welcoming atmosphere, Glad Studios Unisex Salon
          &amp; Spa is the perfect place to relax, refresh, and redefine your
          style.
        </p>
      </section>

      <RippleDivider flip />

      <section className="mv-grid">
        <div className="mv-card">
          <span className="mv-label">Our Mission</span>
          <p>
            At Glad Studios Unisex Salon &amp; Spa, our mission is to enhance
            the beauty, confidence, and well-being of every client by
            delivering exceptional salon and spa services. We are committed
            to providing personalized care, maintaining the highest
            standards of hygiene, using premium-quality products, and
            ensuring every guest enjoys a relaxing and memorable experience.
          </p>
        </div>
        <div className="mv-card">
          <span className="mv-label">Our Vision</span>
          <p>
            Our vision is to become one of the most trusted and preferred
            unisex salons and spas, recognized for excellence in beauty,
            haircare, skincare, and wellness services. We strive to stay
            ahead of industry trends through continuous learning,
            innovation, and outstanding customer service, creating a place
            where every client feels valued, confident, and refreshed.
          </p>
        </div>
      </section>

      <section className="why-section">
        <h2>Why Choose Glad Studios Unisex Salon &amp; Spa?</h2>
        <ul className="why-list">
          {WHY_CHOOSE_US.map((item) => (
            <li key={item}>
              <Sparkles size={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
