// Menu.js
import React from 'react';

function Menu() {
  return (
    <nav className="flex justify-between items-center mb-8 ">
      <ul className="flex text-white space-x-8">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">Agents</a></li>
        <li><a href="#" className="hover:text-gray-300">Tournaments</a></li>
        <li><a href="#" className="hover:text-gray-300">Streaming</a></li>
        <li><a href="#" className="hover:text-gray-300">Clans</a></li>
        <li><a href="#" className="hover:text-gray-300">Teams</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
