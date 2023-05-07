import React from "react";
import NavBar from "../components/glossary/navigationBar";
import Basics from "../components/glossary/basics";

function Glossary() {
    return (
        <div style={ {display: 'flex'}}>
            <NavBar/>
            <Basics/>
        </div>
    );
}

export default Glossary;