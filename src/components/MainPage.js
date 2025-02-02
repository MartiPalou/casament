import React, { useState } from "react";
import localitzacio from "../assets/localització.png";
import vamohviendo from "../assets/Vamohviendo.png";
import corElisa from "../assets/corElisa.png";
import fentelburro from "../assets/fentelburro.png";
import ok_Martí from "../assets/diailloc.png";
import traje from "../assets/traje.png";
import sombrero from "../assets/sombrero.png";
import '../style.css';

function MainPage() {
  const [formData, setFormData] = useState({
    name: "",
    attending: "yes",
    allotjament: "no",
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
    textAlign: 'center', // Centra el contingut dins del contenidor
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
          <li>Cerimònia</li>
          <li>Aperitiu</li>
          <li>Dinar</li>
          <li>Festa</li>
          <li><small>Horari exacte TBD</small></li>
        </ul>
        <div style={smallImageContainerStyle}>
          <img src={vamohviendo} alt="sticker_vamohviendo" style={smallImageStyle} />
        </div>
      </section>

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
      </section>

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
          {/*
          <label>
            Vinc amb un +1:
            <select
              name="plusOne"
              value={formData.plusOne}
              onChange={handleChange}
            >
              <option value="yes">Sí</option>
              <option value="no">No</option>
            </select>
          </label>
          */}

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
