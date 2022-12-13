import React from "react";
import Header from "../header";
import Menu from "../menu";
import Footer from "../footer";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Main from "../main/main";

const AllStructure = () => {
    return (
        <>
        <Provider store={store}>
            <Header />
            <Main />
            <Menu />
            <Footer />
        </Provider>
    </>
    )
}

export default AllStructure;