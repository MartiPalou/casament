import React from "react";
import '../style.css';

function NavBar() {
    return (
        <nav className="navbar">
            <a href="#dia-lloc">Dia i Lloc</a>
            <a href="#horari">Horari</a>
            <a href="#confirmacio">Confirmació d’assistència</a>
        </nav>
    );
}

export default NavBar;