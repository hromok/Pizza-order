import React from "react";
import Header from "../header";
import Menu from "../menu";
import Footer from "../footer";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Thanks from "../thanks/thanks";



const App = () => {
    return (
            <Provider store={store}>
                <Header />
                <Menu />
                <Footer />
            </Provider>
    )
}

export default App;
