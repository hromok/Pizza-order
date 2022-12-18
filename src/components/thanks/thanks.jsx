import React from "react";
import { Link } from "react-router-dom";
import './thanks.css'

const Thanks = () => {
    return(
        <div className="thanks">
            <div className="container">
                <h1>Thanks for order!</h1>
                <h3>Wait for our call!</h3>
            <Link to='/'>
                <button className="btn btn-primary" type="button">Order more</button>
            </Link>
            </div>
        </div>
    )
}

export default Thanks;