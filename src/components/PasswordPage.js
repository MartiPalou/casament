import React, { useState } from "react";

function PasswordPage({ onPasswordSubmit }) {
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onPasswordSubmit(password);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Benvinguts al nostre casament!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contrasenya"
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default PasswordPage;
