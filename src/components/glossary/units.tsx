import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Structures from "../../hooks/ApiStructures";
import LineCreeps from "../../hooks/LineCreeps";
import SmallNeutralCreeps from "../../hooks/SmallNeutralCreeps";
import BigNeutralCamps from "../../hooks/BigNeutralCamps";
import AncientNeutralCamps from "../../hooks/AncientNeutralCamps";


const Units: React.FC = () => {


    return (
        <section className="units_wrapper">
            <Structures/>
            <LineCreeps/>
            <SmallNeutralCreeps/>
            <BigNeutralCamps/>
            <AncientNeutralCamps/>
        </section>
    );
};

export default Units;
