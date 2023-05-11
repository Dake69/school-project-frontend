import React from "react";
import NavBar from "../components/glossary/navigationBar";
import Basics from "../components/glossary/basics";
import {Route, Routes} from 'react-router-dom';
import Mechanics from "../components/glossary/mechanics";

function Glossary() {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path='basics/*' element={<Basics/>}/>
                <Route path="mechanics/*" element={<Mechanics />} />
            </Routes>
        </div>

    );
}

export default Glossary;