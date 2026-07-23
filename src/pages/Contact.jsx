import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Sparkles, ChevronRight } from "lucide-react";
import { SectionEyebrow } from "../components/Shared";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <>
      <section className="page-head">
        <SectionEyebrow>Contact Us</SectionEyebrow>
        <h1>Book your visit</h1>
        <p className="lead">Questions, bridal bookings, or just want to know which package fits you — reach out.</p>
      </section>

      <section className="contact-grid">
        <div className="contact-info">
          <div className="info-row">
            <MapPin size={20} />
            <div>
              <h3>Visit</h3>
              <p>2nd floor, Taqwa building, opp. D Mart, Nehru Nagar, Belagavi, Karnataka 590010</p>
            </div>
          </div>
          <div className="info-row">
            <Phone size={20} />
            <div>
              <h3>Call</h3>
              <p>Add your studio phone number here</p>
            </div>
          </div>
          <div className="info-row">
            <Mail size={20} />
            <div>
              <h3>Email</h3>
              <p>Add your studio email here</p>
            </div>
          </div>
          <div className="info-row">
            <Clock size={20} />
            <div>
              <h3>Hours</h3>
              <p>Add your opening hours here</p>
            </div>
          </div>

          <div
            className="map-plate"
            role="img"
            aria-label="Map showing the salon location near D Mart, Nehru Nagar, Belagavi"
          >
            <div className="map-pin">
              <MapPin size={22} />
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {sent ? (
            <div className="form-sent">
              <Sparkles size={22} />
              <h3>Message received</h3>
              <p>We'll write back within a day, usually sooner.</p>
            </div>
          ) : (
            <>
              <label>
                Name
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
              </label>
              <label>
                Message
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="What are you hoping to book?" rows={5} required />
              </label>
              <button className="btn btn-primary" type="submit">
                Send message <ChevronRight size={16} />
              </button>
            </>
          )}
        </form>
      </section>
    </>
  );
}
