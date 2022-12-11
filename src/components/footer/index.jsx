import React from "react";
import { connect } from "react-redux";
import "./footer.css"


const Footer = (data) => {

    const productLength = data.product.length;
    const arrData = data.product;
    const price = arrData.map(i => {return i.list[1].price});
    const sumPrice = price.reduce((a, b)=> a+b, 0); 
    
    return (
        <>
            <div>
                <div className="orderInfo">
                    <div className="counter">У вашому кошику {productLength} товарів, щоб замовити - натисніть "купити"</div>
                    <div><ul>{productLength === 0 ? <p>{'Замовлення відсутнє'}</p>
                    : productLength > 0 ? arrData.map( (i, index) => <li key={index * 5 + 'li'}>{i.name}</li>)
                    : null}
                    </ul></div>
                    <div className="price">{sumPrice} UAH</div>
                </div>
                <button>Замовити</button>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps) (Footer);