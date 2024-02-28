import React from "react";
import Menu from '../Components/Menu';

import valorant from '../assets/valorant.jpg';

function heroSection() {
    return (
        <div className='container bg-red-500'>
        <Menu />
        <img src={valorant} alt="Valorant" className="h-auto w-full" />
        </div>
    )
   
}

export default heroSection;
