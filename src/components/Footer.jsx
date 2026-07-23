import React, { useState } from "react";
import { Instagram, Facebook } from "lucide-react";

export default function Footer({ setPage }) {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="brand-mark">GS</span>
          <p>
            Glad Studios Unisex Salon &amp; Spa — premium hair, skin, spa,
            makeup, and grooming for everyone.
          </p>
          <div className="socials">
            <Instagram size={18} />
            <Facebook size={18} />
          </div>
        </div>

        <div className="footer-links">
          <h4>Visit</h4>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("about")}>About Us</button>
          <button onClick={() => setPage("services")}>Services</button>
          <button onClick={() => setPage("gallery")}>Gallery</button>
          <button onClick={() => setPage("contact")}>Contact Us</button>
        </div>

        <div className="footer-hours">
          <h4>Address</h4>
          <p>2nd floor, Taqwa building,</p>
          <p>opp. D Mart, Nehru Nagar,</p>
          <p>Belagavi, Karnataka 590010</p>
        </div>

        <div className="footer-news">
          <h4>Stay in the loop</h4>
          {joined ? (
            <p className="joined">You're on the list.</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setJoined(true);
              }}
            >
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Join</button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Glad Studios Unisex Salon &amp; Spa</span>
        <span>Look good. Feel better.</span>
      </div>
    </footer>
  );
}
