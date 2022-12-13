import React from "react";
import './header.css'

const Header = () => {
    return(
        <>
            <header>
                <nav>
                    <div className="navElements">
                        <a href="/"><img src="" alt="logo" /></a>
                        <a href="#">Home</a>
                        <a href="/">Menu</a>
                        <a href="#about">About us</a>
                        <a href="/">Contact us</a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;