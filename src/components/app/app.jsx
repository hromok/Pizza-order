import React from "react";
import Header from "../header";
import Menu from "../menu";
import Footer from "../footer";
import { Provider } from "react-redux";
import store from "../../redux/store";


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
