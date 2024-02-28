// Menu.js
import React from 'react';

function Menu() {
  return (
    
    <div className="absolute top-0 left-0 w-full text-center py-5 decoration-inherit">
    <nav className="flex justify-center alignment-center items-center mb-8 ">
      <ul className="flex text-white space-x-8">
        <li><a href="#" className="hover:text-red-300 text-white ">Home</a></li>
        <li><a href="#" className="hover:text-red-300 text-white">Agents</a></li>
        <li><a href="#" className="hover:text-red-300 text-white">Tournaments</a></li>
        <li><a href="#" className="hover:text-red-300 text-white">Streaming</a></li>
        <li><a href="#" className="hover:text-red-300 text-white">Clans</a></li>
        <li><a href="#" className="hover:text-red-300 text-white">Teams</a></li>
      </ul>
    </nav>
    </div>
  );
}

export default Menu;
