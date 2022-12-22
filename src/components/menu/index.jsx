import React, {useState, useEffect} from "react";
import "./menu.css"
import Service from "../services"
import {connect} from 'react-redux';
import {addProduct} from "../../redux/actions"

const TestCards = ({state, addProduct}) => {

    const menuInfo = new Service().getMenu().classic
    const [card, setCard] = useState(menuInfo);
    
    return (
        <div id="menu">
            <h2>Menu</h2>
            {card === undefined ? <p>Downloading</p> : 
                <div id="allMenu" className="row mx-auto">{card.map((item, index)=>{
                    return (
                        <div key={index} className="col-md-3 eachCard">
                            <div className="card">
                                <img src={item.image} className="card-img-top"/>
                                <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <button className="btn btn-primary" onClick={() => {addProduct(item)}}>To cart</button>
                                <span>{item.list[1].price} UAH</span>
                            </div>
                        </div>
                      </div>
                    )
                })}</div>
            }
            
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps) (TestCards);