import React from "react";
import AllStructure from "../allStructure";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Thanks from "../thanks/thanks";

const App = () => {
    return (
       <Router>
        <Routes>
            <Route path="/" element={<AllStructure />}></Route>    
            <Route path="/thanks" element={<Thanks />}></Route>
            <Route path="*" element={<p>Error 404</p>}></Route>
        </Routes>
       </Router>
    )
}

export default App;
