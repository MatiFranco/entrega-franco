import React from "react";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="images/icono-vino.png" alt="Icono de vino" width="80" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Locales</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link">Nosotros</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )

};

export default Navbar;