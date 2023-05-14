import React from "react";
import NavBar from "../components/glossary/navigationBar";
import Basics from "../components/glossary/basics";
import {Route, Routes} from 'react-router-dom';
import Mechanics from "../components/glossary/mechanics";
import Units from "../components/glossary/units";

function Glossary() {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path='basics/*' element={<Basics/>}/>
                <Route path="mechanics/*" element={<Mechanics />} />
                <Route path="units/*" element={<Units />} />
            </Routes>
        </div>

    );
}

export default Glossary;