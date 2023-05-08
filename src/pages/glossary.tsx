import React from "react";
import NavBar from "../components/glossary/navigationBar";
import Mechanics from "../components/glossary/mechanics"
// import Basics from "../components/glossary/basics";

function Glossary() {
    return (
        <div style={ {display: 'flex'}}>
            {/*<Basics/>*/}
            <NavBar/>
            <Mechanics/>
        </div>
    );
}

export default Glossary;