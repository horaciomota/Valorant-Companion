import React from "react";

import valorant from '../assets/valorant.jpg';

import Menu from '../Components/Menu';

function heroSection() {
    return (
        <div className='relative bg-red-500'>
            <Menu />
            <img src={valorant} alt="Valorant" className="h-auto w-full" />
            <div className="absolute bottom-0 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1>We are valorant</h1>
            <h2>Welcome to Valorant companion, your gateway to an adrenaline-pumping gaming adventure!
                Explore the dynamic universe of Valorant
                with our immersive gameplay and cutting-edge design </h2>
            </div>
            
        </div>
    )

}

export default heroSection;
