import React, { useState } from "react";
import localitzacio from "../assets/localització.png";
import vamohviendo from "../assets/Vamohviendo.png";
import corElisa from "../assets/corElisa.png";
import fentelburro from "../assets/fentelburro.png";
import ok_Martí from "../assets/diailloc.png";
import traje from "../assets/traje.png";
import sombrero from "../assets/sombrero.png";
import '../style.css';

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { 
      question: "Puc fer una sorpresa aquell dia?", 
      answer: "Si algú vol parlar aquell dia o fer alguna cosa sense que nosaltres ho sapiguem abans, pot contactar amb la Judit (+376 610625) 😊." 
    },
    { 
      question: "Podem dormir a l'hotel?", 
      answer: "Sí, tot i que no hi ha habitacions per tothom, si necessiteu allotjament digueu-ho al formulari. Es prioritzarà la gent que no té casa a Andorra." 
    },
    { 
      question: "I si tinc casa a Andorra hi haurà bus per tornar?", 
      answer: "Posarem un bus fins a Sant Julià i Andorra la Vella. Assegureu-vos d'haver-ho posat al formulari de confirmació si el necessiteu. Si cap d'aquestes dues opcions us funciona feu-nos-ho saber." 
    },
    { 
      question: "Hi ha Dresscode?", 
      answer: "No hi ha dresscode estricte, però a veure, es un casament, vine guapet/a." 
    },
    { 
      question: "Hi ha pàrquing?", 
      answer: "Sí, al mateix hotel." 
    },

  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs">
      <div className="faq-top-image" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img src={sombrero} alt="FAQ Top" style={{ maxWidth: '100px', height: 'auto' }} />
      </div>

      <h2>FAQs</h2>

      {faqData.map((item, index) => (
        <div className={`faq-item ${openIndex === index ? 'open' : ''}`} key={index}>
          <h3 
            onClick={() => handleToggle(index)} 
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <span 
              className="triangle" 
              style={{ marginRight: '8px', transition: 'transform 0.3s' }}
            >
              {openIndex === index ? '▼' : '►'}
            </span>
            {item.question}
          </h3>
          {item.image && (
            <div className="faq-image" style={{ textAlign: 'center', margin: '10px 0' }}>
              <img 
                src={item.image} 
                alt={item.imageAlt || 'FAQ Image'} 
                style={{ maxWidth: '100px', width: '100%', height: 'auto' }} 
              />
            </div>
          )}
          {openIndex === index && <p>{item.answer}</p>}
        </div>
      ))}

      <div className="faq-top-image" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img src={traje} alt="FAQ Top" style={{ maxWidth: '100px', height: 'auto' }} />
      </div>
    </section>
  );
}

function MainPage() {
  const [formData, setFormData] = useState({
    name: "",
    attending: "yes",
    allotjament: "no",
    transport: "-",
    kids: "no",
    allergies: "",
  });

  // Funció per codificar les dades en format URL-encoded
  const encode = (data) => {
    return Object.keys(data)
      .map(
        key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "confirmacio", // Ha de coincidir amb el nom del formulari
        ...formData,
      }),
    })
      .then(() => {
        alert("Enviament correcte!");
        // Restableix els camps del formulari als valors per defecte
        setFormData({
          name: "",
          attending: "yes",
          allotjament: "no",
          transport: "-",
          kids: "no",
          allergies: "",
        });
      })
      .catch((error) => alert("Error en l'enviament: " + error));
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sectionStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    marginBottom: "20px",
  };

  const smallImageContainerStyle = {
    textAlign: 'center', // Centra el contingut dins del contenidor haha
  };

  const smallImageStyle = {
    maxWidth: '100px', // Limita l'amplada màxima de la imatge
    width: '100%',     // La imatge ocuparà tot l'espai disponible fins al màxim definit
    height: 'auto',    // Manté la proporció de la imatge
  };

  const textContainerStyle = {
    flex: 1,
  };

  const imageContainerStyle = {
    flexShrink: 0,
    width: "300px",
    height: "200px",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    margin: 0,
    padding: 0,
  };

  return (
    <div id="main-page">
      <section id="dia-lloc" style={sectionStyle}>
        <div style={textContainerStyle}>
          <h2>Dia i Lloc</h2>
          <p>
            El nostre casament tindrà lloc a l'<strong>Hotel Coma Bella</strong>, a Andorra, el proper <strong>20 de setembre</strong> de 2025.
          </p>
        </div>

        <div style={imageContainerStyle}>
          <img src={localitzacio} alt="Localització" style={imageStyle} />
        </div>
      </section>

      <section id="horari">
        <div style={smallImageContainerStyle}>
          <img src={fentelburro} alt="sticker_fentelburro" style={smallImageStyle} />
        </div>
        <h2>Horari</h2>
        <ul>

          <li>12.30 - Cerimònia</li>
          <li>13.00h - Aperitiu</li>
          <li>14.00h - Dinar</li>
          <li>Festa</li>
          <li><small>Horari exacte TBD</small></li>
        </ul>
        <div style={smallImageContainerStyle}>
          <img src={vamohviendo} alt="sticker_vamohviendo" style={smallImageStyle} />
        </div>
      </section>
      {/* 
      <section id="DressCode">
        <div style={smallImageContainerStyle}>
          <img src={sombrero} alt="sticker_sombrero" style={smallImageStyle} />
        </div>
        <h2>DressCode</h2>
        <p>
            No hi ha dresscode estricte, però a veure, es un casament, vine guapet/a. 
          </p>
        <div style={smallImageContainerStyle}>
          <img src={traje} alt="sticker_traje" style={smallImageStyle} />
        </div>
      </section> */}

      <FAQAccordion />

      <section id="confirmacio">
        <div style={smallImageContainerStyle}>
          <img src={corElisa} alt="sticker_corelisa" style={smallImageStyle} />
        </div>
        <h2>Confirmació d’assistència</h2>
        <form
          name="confirmacio"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="confirmacio" />

          <label>
            Nom i cognoms:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Confirmo la meva assistència:
            <select
              name="attending"
              value={formData.attending}
              onChange={handleChange}
            >
              <option value="yes">Sí</option>
              <option value="no">No</option>
            </select>
          </label>

          <label>
            Porto criatures:
            <select
              name="kids"
              value={formData.kids}
              onChange={handleChange}
            >
              <option value="yes">Sí</option>
              <option value="no">No</option>
            </select>
          </label>

          <label>
            Necessito allotjament:
            <select
              name="allotjament"
              value={formData.allotjament}
              onChange={handleChange}
            >
              <option value="yes">Sí</option>
              <option value="no">No</option>
            </select>
          </label>

          <label>
            Dormiré a casa i necessito transport (si res t'encaixa avisa'ns):
            <select
              name="transport"
              value={formData.transport}
              onChange={handleChange}
            >
              <option value="guió">-</option>
              <option value="Andorra la Vella">Andorra la Vella</option>
              <option value="Sant Julià">Sant Julià</option>
              <option value="Transport privat">Vindré amb transport privat</option>
              <option value="No ho sap">No sé on dormiré</option>
              
            </select>
          </label>

          <label>
            Al·lèrgies o qüestions alimentàries, o altres coses que ens vulguis dir:
            <textarea
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
            />
          </label>

          <div style={smallImageContainerStyle}>
            <img src={ok_Martí} alt="sticker_okmarti" style={smallImageStyle} />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>


    </div>
  );
}

export default MainPage;
