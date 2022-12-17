import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../ordering/ordering.css"

const Ordering = (data) => {

    const productLength = data.product.length;
    const arrData = data.product;
    const price = arrData.map(i => {return i.list[1].price});
    const sumPrice = price.reduce((a, b)=> a+b, 0); 
   
    return (
        <>
            <div className="ordering">
                <div className="orderInfo">
                    <div className="counter">You have - <strong>{productLength}</strong> items, for order - click "To cart" and fill the form bellow</div>
                    <div>{productLength === 0 ? <p>{'You have not items in your cart '}</p>
                    : productLength > 0 ? <ol>{arrData.map( (i, index) => <li key={index * 5 + 'li'}>{i.name}</li>)}</ol>
                    : null}
                    </div>
                    <div className="price">Your full amount - {sumPrice} UAH</div>
                </div>
                <div className="formDiv">
                    <form className="form1">
                            <div className="mb-3">
                                <label className="form-label">Your name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Your phone</label>
                                <input type="number" className="form-control" />
                            </div>
                            <Link to='/thanks'>
                                <button type="submit" className="btn btn-primary">Order</button>
                            </Link>
                    </form>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps) (Ordering);