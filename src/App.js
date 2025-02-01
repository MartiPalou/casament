import React, { useState } from "react";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import PasswordPage from "./components/PasswordPage";
import './style.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handlePasswordSubmit = (password) => {
        if (password === "casament2024") {
            setIsAuthenticated(true);
        } else {
            alert("Contrasenya incorrecta");
        }
    };

    return (
        <div>
            {isAuthenticated ? (
                <>
                    <NavBar />
                    <MainPage />
                </>
            ) : (
                <PasswordPage onPasswordSubmit={handlePasswordSubmit} />
            )}
        </div>
    );
}

export default App;
