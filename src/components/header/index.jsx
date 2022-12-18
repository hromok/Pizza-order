import React from "react";
import './header.css'
import logo from '../img/pizza-logo-design_9845-319-removebg-preview.png'

const Header = () => {
    return(
        <>
            <header>
                <nav>
                    <div className="navElements">
                        <a id="logo" href="#"><img  src={logo} alt="logo" /></a>
                        <a href="#">Home</a>
                        <a href="#menu">Menu</a>
                        <a href="#about">About us</a>
                        <a href="#">Contact us</a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;