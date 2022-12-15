import React from "react";
import Header from "../header";
import Menu from "../menu";
import Ordering from "../ordering";
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
            <Ordering />
        </Provider>
    </>
    )
}

export default AllStructure;