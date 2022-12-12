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
                    <div className="counter">Кількість товарів у вашому кошику - <strong>{productLength}</strong>, щоб замовити - натисніть "купити"</div>
                    <div><ul>{productLength === 0 ? <p>{'Замовлення відсутнє'}</p>
                    : productLength > 0 ? arrData.map( (i, index) => <li key={index * 5 + 'li'}>{i.name}</li>)
                    : null}
                    </ul></div>
                    <div className="price">{sumPrice} UAH</div>
                </div>
                <div className="formDiv">
                    <form className="form1">
                        
                            <div class="mb-3">
                                <label for="exampleInputText1" class="form-label">Your name</label>
                                <input type="text" class="form-control" id="exampleInputText1"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPhone1" class="form-label">Your phone</label>
                                <input type="number" class="form-control" id="exampleInputPhone1"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Order</button>
                       
                    </form>
                    </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps) (Footer);