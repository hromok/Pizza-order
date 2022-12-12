import React, {useState, useEffect} from "react";
import "./menu.css"
import Service from "../services/"
import {connect} from 'react-redux';
import {addProduct} from "../../redux/actions"

const Menu = ({state, addProduct}) => {

    const menuInfo = new Service().getMenu().classic
    const [card, setCard] = useState(menuInfo);
    
    return (
        <>
            {card === undefined ? <p>Downloading</p> : <div className="cards">{card.map((item, index)=>{
                 return ( 
                 <div key={index} className="card">
                    <div><img src={item.image} alt="" /></div>
                    <div>{item.name}</div>
                    <div>{item.list[1].price} UAH</div>
                    <button onClick={() => {addProduct(item)}}>Купити</button>
                 </div>)
            })}</div>}
            
        </>
    )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (information) => {
            dispatch(addProduct(information))   
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Menu);