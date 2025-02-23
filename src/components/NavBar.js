import React, { useState } from "react";
import '../style.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        {/* Opcional: posa el teu logo o nom de la web */}
        Elisa i Martí
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#dia-lloc" onClick={() => setIsOpen(false)}>Dia i Lloc</a>
        <a href="#horari" onClick={() => setIsOpen(false)}>Horari</a>
        {/*<a href="#DressCode" onClick={() => setIsOpen(false)}>DressCode</a> */}
        <a href="#faqs"onClick={() => setIsOpen(false)}>FAQs</a>
        <a href="#confirmacio" className="active" onClick={() => setIsOpen(false)}>Confirmació d’assistència</a> 

      </div>
    </nav>
  );
}

export default NavBar;
