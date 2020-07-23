
import React from "react";
import { Link } from "react-router-dom";



function Navbar() {


    return (

        <nav class="navbar transparent navbar-expand-lg navbar-light">
            
            <a class="navbar-brand" href="/home">Home</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link to="/home" className="nav-link">
                            About me
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/portfolio" className="nav-link">
                            Portfolio
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/contact" className="nav-link">
                            Contact me
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>

    );
}


export default Navbar;