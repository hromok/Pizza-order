import React from "react";
import { Link } from "react-router-dom";

const Thanks = () => {
    return(
        <>
            <div className="container">
                <h1>Thanks for order</h1>
            </div>
            <Link to='/'>
                <button type="button">Order more</button>
            </Link>
        </>
    )
}

export default Thanks;