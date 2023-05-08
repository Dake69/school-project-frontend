import React from "react";
import NavBar from "../components/glossary/navigationBar";
import Basics from "../components/glossary/basics";
import {Route, Routes} from "react-router-dom";

function Glossary() {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path='basics' element={<Basics/>}/>
            </Routes>
        </div>

    );
}

export default Glossary;