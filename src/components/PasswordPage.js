import React, { useState } from "react";
import foto_anell from "../assets/foto_anell.png";

function PasswordPage({ onPasswordSubmit }) {
  const [password, setPassword] = useState("");

  // Estils per centrar tot el contingut
  const sectionStyle = {
    display: "flex",
    flexDirection: "column",    // Columna: un element sota l'altre
    alignItems: "center",       // Centra horitzontalment
    justifyContent: "center",   // Centra verticalment
    marginTop: "50px",
    marginBottom: "20px",
  };

  const smallImageContainerStyle = {
    textAlign: "center",
    marginBottom: "20px",
  };

  const smallImageStyle = {
    maxWidth: "100px",
    width: "100%",
    height: "auto",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPasswordSubmit(password);
  };

  return (
    <section id="contrasenya" style={sectionStyle}>
      <h1>Et convidem al nostre casament!</h1>
      <div style={smallImageContainerStyle}>
        <img src={foto_anell} alt="sticker_foto_anell" style={smallImageStyle} />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contrasenya"
        />
        <button type="submit">Entrar</button>
      </form>
    </section>
  );
}

export default PasswordPage;
