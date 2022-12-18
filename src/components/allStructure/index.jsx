import React from "react";
import Header from "../header";
import Menu from "../menu";
import Ordering from "../ordering";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Main from "../main/main";
import Footer from "../footer";
import './allStructure.css'

const AllStructure = () => {
    return (
        <>
        <Provider store={store}>
            <Header />
            <Main />
            <Menu />
            <Ordering />
            <Footer />
        </Provider>
    </>
    )
}

export default AllStructure;