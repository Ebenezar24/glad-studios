import React, { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState("home");

  let content;
  if (page === "about") content = <About />;
  else if (page === "services") content = <Services />;
  else if (page === "gallery") content = <Gallery />;
  else if (page === "contact") content = <Contact />;
  else content = <Home setPage={setPage} />;

  return (
    <div className="site">
      <NavBar page={page} setPage={setPage} />
      {content}
      <Footer setPage={setPage} />
    </div>
  );
}
