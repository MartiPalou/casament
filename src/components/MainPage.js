import React, { useState } from "react";
import localitzacio from "../assets/localització.png";
import '../style.css';

function MainPage() {
  const [formData, setFormData] = useState({
    name: "",
    attending: "yes",
    plusOne: "no",
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

  // Funció per gestionar l'enviament del formulari
  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviem les dades al servidor (Netlify captura aquesta petició)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "confirmacio", // Ha de coincidir amb el nom del formulari
        ...formData,
      }),
    })
      .then(() => alert("Enviament correcte!"))
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

  const textContainerStyle = {
    flex: 1,
  };

  const imageContainerStyle = {
    flexShrink: 0,
    width: "300px",
    height: "200px",
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div id="main-page">
      <section id="dia-lloc" style={sectionStyle}>
        <div style={textContainerStyle}>
          <h2>Dia i Lloc</h2>
          <p>El nostre casament tindrà lloc el 15 de juny de 2024 a Can Ribes, Girona.</p>
        </div>
        <div style={imageContainerStyle}>
          <img src={localitzacio} alt="Localització" style={imageStyle} />
        </div>
      </section>

      <section id="horari">
        <h2>Horari</h2>
        <ul>
          <li>17:00h - Cerimònia</li>
          <li>18:30h - Aperitiu</li>
          <li>20:00h - Sopar</li>
        </ul>
      </section>

      <section id="confirmacio">
        <h2>Confirmació d’assistència</h2>
        {/* Modifiquem el formulari per a Netlify */}
        <form
          name="confirmacio"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          {/* Camp ocult necessari perquè Netlify identifiqui el formulari */}
          <input type="hidden" name="form-name" value="confirmacio" />

          <label>
            Nom:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Assistiré:
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
            Al·lèrgies o qüestions alimentàries:
            <textarea
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default MainPage;
