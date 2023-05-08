import React from "react";
import NavBar from "../components/glossary/navigationBar";
<<<<<<< HEAD
import Mechanics from "../components/glossary/mechanics"
// import Basics from "../components/glossary/basics";

function Glossary() {
    return (
        <div style={ {display: 'flex'}}>
            {/*<Basics/>*/}
            <NavBar/>
            <Mechanics/>
=======
import Basics from "../components/glossary/basics";
import {Route, Routes} from "react-router-dom";

function Glossary() {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path='basics' element={<Basics/>}/>
            </Routes>
>>>>>>> 8138b31c727640d70f1ff5b518f2b7423a4b78e7
        </div>

    );
}

export default Glossary;